import p0 from '@/assets/person-0.jpg.asset.json';
import p1 from '@/assets/person-1.jpg.asset.json';
import p2 from '@/assets/person-2.jpg.asset.json';
import p3 from '@/assets/person-3.jpg.asset.json';
import p4 from '@/assets/person-4.jpg.asset.json';
import p5 from '@/assets/person-5.jpg.asset.json';
import p6 from '@/assets/person-6.jpg.asset.json';
export const photos = [p0.url,p1.url,p2.url,p3.url,p4.url,p5.url,p6.url];
export const people = [
 {name:'Sofía Alarcón',short:'Sofía',age:21,major:'Ingeniería de Software • 4° Semestre',image:photos[3],message:'¿Nos vemos en la cafetería de la biblioteca para repasar? ☕',time:'14:24',unread:true},
 {name:'Mateo Castillo',short:'Mateo',age:23,major:'Arquitectura • Sede Central',image:photos[2],message:'¡Genial! Tengo los apuntes de Arquitectura que necesitas...',time:'11:05',unread:true},
 {name:'Valeria Méndez',short:'Valeria',age:20,major:'Medicina • 5° Año',image:photos[5],message:'Dale, coordinamos después de las 4pm cuando termine mi guardia.',time:'Ayer',unread:false},
 {name:'Diego Salcedo',short:'Diego',age:22,major:'Diseño Gráfico • 3° Semestre',image:photos[6],message:'¿Te vas a sumar al hackathon universitario de este fin de semana?',time:'Mar',unread:false},
 {name:'Camila Valenzuela',short:'Camila',age:21,major:'Arquitectura & Urbanismo • 5° Ciclo',image:photos[0],message:'¡Hola! Qué gusto encontrarte por aquí ☕',time:'Ahora',unread:false},
];
export const initialBio = 'Amante del diseño contemporáneo, maquetas a medianoche y café de campus cargado ☕. Buscando a alguien para estudiar en la biblioteca central o escapar por helados los viernes.';
