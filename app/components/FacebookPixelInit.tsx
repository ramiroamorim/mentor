'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { UUID } from 'crypto';


// Função para hash SHA-256
async function hashSHA256(value: string): Promise<string> {
  if (!value) return '';

  // Normalizar: lowercase e trim
  const normalized = value.toLowerCase().trim();

  // Codificar para Uint8Array
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);

  // Hash SHA-256
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  // Converter para hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Interface para dados de usuário
interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
}

export function FacebookPixelInit() {
  useEffect(() => {
    async function sendHashedUserData() {
      // Verifica se fbq existe
      if (typeof window === 'undefined' || !(window as any).fbq) {
        console.log('Facebook Pixel não carregado ainda');
        return;
      }

      const fbq = (window as any).fbq;

      // Pegar external_id dos cookies (já existe no seu sistema)
      const externalId = Cookies.get('_external_id');


      // Exemplo de como pegar dados do localStorage (se você salvar lá)
      const userDataString = localStorage.getItem('userData');
      let userData: UserData = {};

      if (userDataString) {
        try {
          userData = JSON.parse(userDataString);
        } catch (e) {
          console.error('Erro ao parsear userData:', e);
        }
      }


      // Criar objeto com dados hasheados
      const hashedData: Record<string, string> = {};

      // Hash de cada campo (apenas se existir)
      if (userData.email) {
        hashedData.em = await hashSHA256(userData.email);
      }

      if (userData.phone) {
        // Remover caracteres não-numéricos antes de hashear
        const phoneClean = userData.phone.replace(/\D/g, '');
        hashedData.ph = await hashSHA256(phoneClean);
      }

      if (userData.firstName) {
        hashedData.fn = await hashSHA256(userData.firstName);
      }

      if (userData.lastName) {
        hashedData.ln = await hashSHA256(userData.lastName);
      }

      if (userData.city) {
        hashedData.ct = await hashSHA256(userData.city);
      }

      if (userData.state) {
        // State deve ser código de 2 letras (ex: SP, RJ)
        hashedData.st = await hashSHA256(userData.state);
      }

      if (userData.zipCode) {
        // Remover hífen e espaços do CEP
        const zipClean = userData.zipCode.replace(/[-\s]/g, '');
        hashedData.zp = await hashSHA256(zipClean);
      }

      if (userData.country) {
        // País deve ser código de 2 letras (ex: br)
        hashedData.country = await hashSHA256(userData.country);
      }

      // Adicionar external_id (não precisa hashear)
      if (externalId) {
        hashedData.external_id = externalId;
      }

      // Pegar FBP e FBC dos cookies (NÃO hashear - o Facebook precisa deles em plain text)
      const fbp = Cookies.get('_fbp');
      const fbc = Cookies.get('_fbc');

      if (fbp) {
        hashedData.fbp = fbp; // FBP não deve ser hasheado
      }

      if (fbc) {
        hashedData.fbc = fbc; // FBC não deve ser hasheado
      }

      // User Agent (não hashear)
      if (typeof navigator !== 'undefined') {
        hashedData.user_agent = navigator.userAgent;
      }

      // Client IP Address é coletado automaticamente pelo Facebook no lado do servidor
      // Não é possível/necessário enviar do cliente

      // Remover campos vazios
      Object.keys(hashedData).forEach(key => {
        if (!hashedData[key]) {
          delete hashedData[key];
        }
      });

      // SEMPRE envia dados hasheados (pelo menos external_id, fbp, fbc)
      console.log('Dados hasheados enviados ao Facebook Pixel:', {
        campos: Object.keys(hashedData).join(', '),
        total: Object.keys(hashedData).length,
        hashes: hashedData
      });

      // PRIMEIRO e ÚNICO init do pixel - COM DADOS HASHEADOS
      fbq('init', '1363853995230465', hashedData);

      // Track PageView com event ID único
      fbq('track', 'PageView', {}, { eventID: crypto.randomUUID() as UUID });
    }

    // Aguardar o Facebook Pixel carregar
    const timer = setTimeout(() => {
      sendHashedUserData().catch(console.error);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
