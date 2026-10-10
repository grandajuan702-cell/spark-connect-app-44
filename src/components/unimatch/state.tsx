import { createContext, useContext, useState, type ReactNode } from 'react';
import { initialBio } from './data';
type Message={text:string;sent:boolean;time:string};
const initialMessages:Message[]=[{text:'¡Hola! Vi que también estás en 4° ciclo de sistemas y que te apasiona el open-source. 🙌',sent:false,time:'14:18'},{text:'¡Hola Sofía! Sí, justo estoy armando mi proyecto para el hackathon de este mes con FastAPI y React.',sent:true,time:'14:20'},{text:'¡Qué bueno! Me encantaría ver el repo. ¿Nos vemos en la cafetería de la biblioteca para repasar? ☕',sent:false,time:'14:24'},{text:'¡Perfecto! Estoy en el piso 2 terminando una lectura. Bajo en 10 minutos. 🚀',sent:true,time:'14:25'}];
function useAppState(){const [bio,setBio]=useState(initialBio);const [name,setName]=useState('Camila Valenzuela');const [tags,setTags]=useState(['Diseño3D','CaféDeCampus','Fotografía','Biblioteca','MúsicaIndie','Voleybol','OpenSource']);const [liked,setLiked]=useState<string[]>([]);const [messages,setMessages]=useState<Record<string,Message[]>>({'Sofía Alarcón':initialMessages});return {bio,setBio,name,setName,tags,setTags,liked,setLiked,messages,setMessages};}
const Context=createContext<ReturnType<typeof useAppState>|null>(null);
export function AppProvider({children}:{children:ReactNode}){const state=useAppState();return <Context.Provider value={state}>{children}</Context.Provider>}
export function useApp(){const value=useContext(Context);if(!value)throw new Error('AppProvider missing');return value;}
