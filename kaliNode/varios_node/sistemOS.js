/* uso del módulo os.
 * algunos de los módulos del núcleo Node.js son:
 * os, fs, http, url, net, path, process, dns, etc.
 * os aporta informacion basica del sistema 
 */

const os = require('os');

console.log('SO: ' + os.platform());
console.log('Version SO: ' + os.release());
console.log('Mem total: ' + os.totalmen() + ' bytes');
console.log('Mem libre: ' + os.freemem() + ' bytes');
console.log('Hostname: ' + os.hostnane());

