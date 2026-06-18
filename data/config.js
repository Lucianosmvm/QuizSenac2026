/* Configuração e categorias do quiz. */
const QUESTIONS_PER_ROUND = 10;

const CATEGORIES = [
  { id: 'ingles', name: 'Inglês',         code: 'ENG', color: '#E0A458' },
  { id: 'php',    name: 'PHP',            code: 'PHP', color: '#9B7BEF' },
  { id: 'adm',    name: 'ADM',            code: 'ADM', color: '#3FA88C' },
  { id: 'csharp', name: 'C#',             code: 'C#',  color: '#5B8DEF' },
  { id: 'bd',     name: 'Banco de Dados', code: 'BD',  color: '#C75FAE' },
  { id: 'libras', name: 'Libras',         code: 'LIB', color: '#E0617E' },
];

const SVG_PLACEHOLDERS = {
  'hand-1': `<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="152" height="152" rx="12" fill="none" stroke="#3a3d5c" stroke-width="2" stroke-dasharray="6 6"/><path d="M60 110 V60 a8 8 0 0 1 16 0 v30 M76 90 V50 a8 8 0 0 1 16 0 v40 M92 92 V58 a8 8 0 0 1 16 0 v32 M108 100 V70 a7 7 0 0 1 14 0 v30 a26 26 0 0 1 -26 26 h-22 a26 26 0 0 1 -26 -26 v-14 a8 8 0 0 1 16 0" fill="none" stroke="#E0617E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><text x="80" y="142" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9498b0">IMAGEM DO SINAL AQUI</text></svg>`,
  'hand-2': `<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="152" height="152" rx="12" fill="none" stroke="#3a3d5c" stroke-width="2" stroke-dasharray="6 6"/><circle cx="80" cy="75" r="34" fill="none" stroke="#E0617E" stroke-width="4"/><path d="M62 75 a18 18 0 0 1 36 0" fill="none" stroke="#E0617E" stroke-width="4" stroke-linecap="round"/><text x="80" y="142" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9498b0">IMAGEM DO SINAL AQUI</text></svg>`,
  'hand-3': `<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="152" height="152" rx="12" fill="none" stroke="#3a3d5c" stroke-width="2" stroke-dasharray="6 6"/><path d="M50 100 L80 50 L110 100 Z" fill="none" stroke="#E0617E" stroke-width="4" stroke-linejoin="round"/><line x1="50" y1="100" x2="110" y2="100" stroke="#E0617E" stroke-width="4"/><text x="80" y="142" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#9498b0">IMAGEM DO SINAL AQUI</text></svg>`
};
