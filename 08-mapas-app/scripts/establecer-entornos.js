const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const ruta = './src/environments/environment.ts';
const rutaDev = './src/environments/environment.development.ts';
const mapBoxToken = process.env['MAPBOX_TOKEN'];

if (!mapBoxToken) { throw new Error('MAPBOX_TOKEN no definido'); }

const contenido =
`export const environment = {
  mapBoxToken: "${mapBoxToken}"
};`

mkdirSync('./src/environments', { recursive: true });
writeFileSync(ruta, contenido);
writeFileSync(rutaDev, contenido);