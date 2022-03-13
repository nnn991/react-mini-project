import React, { useContext, useEffect, useState } from 'react'
import Modal from './Modal';

const ModalText = (props) => {

    const [modaltext, setModalText] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
          const response = await fetch('https://react-book-order-68ae9-default-rtdb.firebaseio.com/books.json')
        
          console.log(response.ok);
  
          const responseData = await response.json();
          console.log(responseData);
  
          const modalData = [];
          for (const key in responseData) {
            modalData.push({
              id: key,
              name: responseData[key].name,
              author: responseData[key].author,
              description: responseData[key].description,
              price: responseData[key].price
            });
          }
          // console.log(booksData);
          setModalText(modalData);
        }
  
        fetchBooks().catch(error => console.log(error));
        
      }, []);

  return <Modal onClose={props.onClose}>{modaltext}</Modal>
}

export default ModalText