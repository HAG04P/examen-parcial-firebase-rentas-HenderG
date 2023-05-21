//Importar firebase y su configuracion
import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { collection, query, getDocs} from 'firebase/firestore';

//Leer la coleccion de artistas
const casas= query(collection(db, "casas"));

//Leer los documentos de la coleccion de forma asincrona
const querySnapshot = await getDocs(casas);

let casas_contenedor = document.getElementById('casas');

querySnapshot.forEach((doc) => {
  let casas = doc.data()
    casas_contenedor.innerHTML += `<li>${casas.descripcion} - ${casas.precio}-${casas.direccion}
        <img src="${casas.imagen}"  class="w-48 h-48 rounded-full">
    </li>`;
});