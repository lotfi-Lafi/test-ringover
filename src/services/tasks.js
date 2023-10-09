import axios from "axios";
import { toast } from 'react-toastify';

export function getTasksList() {
    return axios.get('http://127.0.0.1:9000/v1/tasks')
      .then(res => { 
        return res.data 
      })
      .catch((error) => {
        toast.error('Une erreur est survenue lors de la récupération des données.');
        console.error('Erreur API :', error);
      });
}

export function addItemToList(item) {
  return axios.post('http://127.0.0.1:9000/v1/tasks',item)
    .then(res => { 
      toast.success(`L'élément a été ajouté avec succès`);
      return res 
    })
    .catch((error) => {
      toast.error(`Une erreur est survenue lors de l'ajout d'un nouvel élément.`);
      console.error('Erreur API :', error);
    });
}

export function updateItem(item, label) {
  return axios.put(`http://127.0.0.1:9000/v1/tasks/${label}`,item)
    .then(res => { 
      toast.success(`L'élément a été mis à jour avec succès`);
      return res 
    })
    .catch((error) => {
      toast.error(`Une erreur est survenue lors de la mise à jour d'un élément.`);
      console.error('Erreur API :', error);
    });
}

export function deleteItem(val) {
  return axios.delete(`http://127.0.0.1:9000/v1/tasks/${val}`)
    .then(res => { 
      toast.success(`L'élément a été supprimé avec succès.`);
      return res 
    })
    .catch((error) => {
      toast.error(`Une erreur est survenue lors de la suppression d'un élément`);
      console.error('Erreur API :', error);
    });
}
