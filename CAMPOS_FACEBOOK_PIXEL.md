# Campos do Facebook Pixel - Status de Implementação

## ✅ Campos implementados e visíveis no Meta Pixel Helper

### Campos que SEMPRE aparecem (automático):
- ✅ `external_id` - UUID único do usuário (gerado automaticamente)
- ✅ `fbp` - Cookie do Facebook Pixel (gerado automaticamente)
- ✅ `fbc` - Facebook Click ID (quando vem de anúncio)
- ✅ `user_agent` - Informações do navegador

### Campos que aparecem quando há dados de usuário:
- ✅ `em` - Email (hasheado SHA-256)
- ✅ `ph` - Telefone (hasheado SHA-256)
- ✅ `fn` - Primeiro nome (hasheado SHA-256)
- ✅ `ln` - Último nome (hasheado SHA-256)
- ✅ `ct` - Cidade (hasheado SHA-256)
- ✅ `st` - Estado (hasheado SHA-256)
- ✅ `zp` - CEP (hasheado SHA-256)
- ✅ `country` - País (hasheado SHA-256)

## ❌ Campos que NÃO aparecem no client-side

### `client_ip_address` - IP do Cliente
**Por que não aparece:**
- O IP é coletado **automaticamente pelo Facebook no servidor deles**
- Não é possível (nem necessário) enviar do navegador
- O Facebook pega o IP da requisição HTTP automaticamente

**Onde ver:**
- Não aparece no Meta Pixel Helper (extensão do browser)
- Aparece apenas nos logs do Facebook Events Manager (server-side)

## 📊 Como testar todos os campos

### Método 1: Botão de teste (recomendado)
1. Acesse a página
2. Clique no botão azul flutuante "🧪 Testar Facebook Pixel Hash"
3. Abra o Meta Pixel Helper
4. Você verá 11+ campos preenchidos

### Método 2: Integração real (produção)
```typescript
import { setUserData } from '@/lib/trackingUtils';

// Após login/cadastro do usuário
setUserData({
  email: user.email,
  phone: user.phone,
  firstName: user.firstName,
  lastName: user.lastName,
  city: user.city,
  state: user.state,
  country: 'br',
  zipCode: user.zipCode
});
```

### Método 3: Modo desenvolvimento (sempre ativo)
No arquivo [FacebookPixelInit.tsx](app/components/FacebookPixelInit.tsx:102-114), descomente as linhas:

```typescript
// MODO DESENVOLVIMENTO: Descomentar para testar com dados fake sempre
if (Object.keys(userData).length === 0) {
  userData = {
    email: 'usuario@exemplo.com',
    phone: '11987654321',
    firstName: 'João',
    lastName: 'Silva',
    city: 'São Paulo',
    state: 'SP',
    country: 'br',
    zipCode: '01310-100'
  };
  console.log('⚠️ MODO DEV: Usando dados fake para teste');
}
```

## 🔒 Segurança e Privacidade

### Campos hasheados (SHA-256):
- ✅ Email
- ✅ Telefone
- ✅ Nome
- ✅ Sobrenome
- ✅ Cidade
- ✅ Estado
- ✅ CEP
- ✅ País

### Campos em texto puro (permitido pelo Facebook):
- ✅ `external_id` - UUID (não é PII)
- ✅ `fbp` - Cookie do Facebook (não é PII)
- ✅ `fbc` - Facebook Click ID (não é PII)
- ✅ `user_agent` - Info do navegador (não é PII)
- ✅ `client_ip_address` - Coletado pelo servidor do Facebook

## 📈 Benefícios da implementação

Com todos esses campos implementados, você terá:

1. **Melhor atribuição de conversões**
   - Facebook consegue vincular eventos a usuários reais

2. **Públicos personalizados mais precisos**
   - Criar audiences baseadas em dados reais de clientes

3. **Lookalike audiences de qualidade**
   - Facebook encontra pessoas similares aos seus clientes

4. **Otimização de campanhas melhorada**
   - Algoritmo do Facebook aprende melhor quem converte

5. **Compliance LGPD/GDPR**
   - Dados PII são hasheados antes de sair do navegador
   - Facebook só recebe hashes, não dados originais

## 🎯 Próximos passos

1. **Teste agora:** Clique no botão azul de teste
2. **Verifique:** Abra o Meta Pixel Helper e veja os campos
3. **Produção:** Integre o `setUserData()` no seu fluxo de login
4. **Monitore:** Acompanhe no Facebook Events Manager

## 📝 Notas importantes

- O **Meta Pixel Helper** mostra dados do **client-side** (navegador)
- O **Facebook Events Manager** mostra dados **completos** (incluindo IP)
- Dados hasheados aparecem como strings longas (ex: `a3f4b2c1d5e6...`)
- Isso é **correto** - significa que o hash está funcionando!
