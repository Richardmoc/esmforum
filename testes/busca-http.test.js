const app = require('../server');
let server, base;
beforeAll(done => { server = app.listen(0, '127.0.0.1', () => {base = `http://127.0.0.1:${server.address().port}`; done();}); });
afterAll(done => { server.close(done); });
test('GET real devolve JSON com contrato da listagem', async () => {
  const res = await fetch(`${base}/perguntas/busca`);
  expect(res.status).toBe(200);
  const dados = await res.json();
  expect(Array.isArray(dados)).toBe(true);
  for (const p of dados) expect(p).toEqual(expect.objectContaining({id_pergunta: expect.any(Number), texto: expect.any(String), num_respostas: expect.any(Number)}));
});
test('consulta HTTP excessiva retorna 400', async () => { const res = await fetch(`${base}/perguntas/busca?q=${'x'.repeat(101)}`); expect(res.status).toBe(400); expect(await res.json()).toHaveProperty('erro'); });
test('query duplicada retorna 400 em vez de filtrar silenciosamente', async () => { const res = await fetch(`${base}/perguntas/busca?q=a&q=b`); expect(res.status).toBe(400); });
test('rota antiga continua acessível', async () => { const res = await fetch(base); expect(res.status).toBe(200); expect(Array.isArray(await res.json())).toBe(true); });
