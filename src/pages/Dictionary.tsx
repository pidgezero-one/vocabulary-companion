import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  } from '@ionic/react';
  import React from 'react';
  
  const Dictionary: React.FC = () => {

    const init = () => {
        var XMLParser = require('react-xml-parser');
        fetch('../../files/kanjidic2.xml').then(res=>res.clone().text()).then(response => {
            var xml = new XMLParser().parseFromString(response);    // Assume xmlText contains the example XML
            console.log(xml.getElementsByTagName('Name'));
        })
        return null
    }

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Dictionary</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        {init()}
        </IonContent>
      </IonPage>
    );
  };
  export default Dictionary;