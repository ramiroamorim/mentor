# Facebook Pixel - Envio de Dados Hasheados (Advanced Matching)

## O que foi implementado

Sistema completo de hashing SHA-256 para dados de usuário antes de enviar para o Facebook Pixel, seguindo as melhores práticas e requisitos do Facebook.

## Arquivos modificados/criados

1. **[app/layout.tsx](app/layout.tsx)** - Corrigido erros de sintaxe e adicionado `FacebookPixelInit`
2. **[app/components/FacebookPixelInit.tsx](app/components/FacebookPixelInit.tsx)** - Componente que faz o hashing e envia dados
3. **[lib/trackingUtils.ts](lib/trackingUtils.ts)** - Adicionadas funções `setUserData()` e `clearUserData()`

## Por que hashear dados?

O Facebook **EXIGE** que dados PII (Personally Identifiable Information) sejam hasheados com SHA-256 antes de enviar via Advanced Matching para:

- **Privacidade**: Proteger dados sensíveis dos usuários
- **Compliance**: Seguir políticas do Facebook e LGPD/GDPR
- **Match Rate**: Melhorar taxa de correspondência de eventos com usuários do Facebook
- **Conversões**: Rastrear melhor conversões e criar públicos personalizados

## Como usar

### 1. Quando o usuário fizer login/cadastro

```typescript
import { setUserData } from '@/lib/trackingUtils';

// Exemplo: após login bem-sucedido
function handleLogin(user) {
  setUserData({
    email: user.email,           // Será hasheado automaticamente
    phone: user.phone,            // Será hasheado automaticamente
    firstName: user.firstName,    // Será hasheado automaticamente
    lastName: user.lastName,      // Será hasheado automaticamente
    city: 'São Paulo',           // Opcional
    state: 'SP',                 // Opcional (código de 2 letras)
    country: 'br',               // Opcional (código de 2 letras)
    zipCode: '01310-100'         // Opcional (CEP)
  });
}
```

### 2. Quando o usuário fizer logout

```typescript
import { clearUserData } from '@/lib/trackingUtils';

function handleLogout() {
  clearUserData();
}
```

### 3. Como funciona automaticamente

1. Quando você chama `setUserData()`, os dados são salvos no `localStorage`
2. O componente `FacebookPixelInit` (que roda automaticamente):
   - Pega os dados do `localStorage`
   - Normaliza cada campo (lowercase, trim)
   - Faz hash SHA-256 de cada campo
   - Envia para o Facebook via `fbq('init', 'PIXEL_ID', hashedData)`

## Campos suportados

| Campo | Código FB | Exemplo | Observação |
|-------|-----------|---------|------------|
| email | `em` | `usuario@email.com` | Será normalizado e hasheado |
| phone | `ph` | `11987654321` | Apenas números |
| firstName | `fn` | `João` | Nome |
| lastName | `ln` | `Silva` | Sobrenome |
| city | `ct` | `São Paulo` | Cidade |
| state | `st` | `SP` | Estado (2 letras) |
| country | `country` | `br` | País (2 letras) |
| zipCode | `zp` | `01310-100` | CEP |
| external_id | `external_id` | Auto | Pego dos cookies (não hasheado) |

## Exemplo completo

```typescript
// Em um componente de formulário de checkout
'use client';

import { setUserData } from '@/lib/trackingUtils';

export function CheckoutForm() {
  const handleSubmit = async (data) => {
    // Salvar dados do usuário para tracking
    setUserData({
      email: data.email,
      phone: data.phone,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      country: 'br'
    });

    // Continuar com o processo de checkout...
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Seus campos de formulário */}
    </form>
  );
}
```

## Verificação

Para verificar se está funcionando:

1. Abra o DevTools (F12)
2. Na aba Console, você verá:
   - `"Dados de usuário salvos. Serão hasheados e enviados ao Facebook Pixel."`
   - `"Enviando dados hasheados para Facebook Pixel: em, ph, fn, ln, external_id"`

3. Para testar no Facebook:
   - Acesse: Events Manager > Test Events
   - Cole o Pixel ID: `1363853995230465`
   - Acesse sua página e faça login
   - Veja os eventos com "Customer Information" preenchido

## Normalização automática

O sistema faz normalização automática antes do hash:

- **Email**: lowercase, trim
- **Telefone**: remove caracteres não-numéricos
- **Nomes**: lowercase, trim
- **CEP**: remove hífens e espaços
- **Estado/País**: lowercase

## Segurança

- Dados NUNCA são enviados em texto puro
- Hash SHA-256 é irreversível
- Dados ficam apenas no `localStorage` do browser do usuário
- Facebook usa os hashes para fazer match, mas não consegue "deshasear"

## Benefícios

- **Melhor atribuição**: Facebook consegue vincular conversões a usuários
- **Públicos personalizados**: Criar audiences baseadas em dados reais
- **Lookalike audiences**: Criar públicos similares mais precisos
- **Otimização de campanhas**: Facebook otimiza melhor sabendo quem converteu
- **LGPD/GDPR compliant**: Dados são hasheados antes de sair do browser
