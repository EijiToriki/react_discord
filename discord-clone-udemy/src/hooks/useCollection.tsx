import { useEffect, useState } from 'react'
import { onSnapshot, collection, query, DocumentData, Query } from 'firebase/firestore'; 
import { db } from '../firebase';

interface Channels{
  id : string,
  channel : DocumentData
}

function useCollection(data : string) {
  const [documents, setDocuments] = useState<Channels[]>([])
  const collentionRef: Query<DocumentData> = query(collection(db, data))

  useEffect(() => {
    onSnapshot(collentionRef, (querySnapshot) => {
      const channelsRslts : Channels[] = []
      querySnapshot.docs.forEach((doc) => {
        channelsRslts.push({
          id: doc.id,
          channel: doc.data()
        })
      })
      setDocuments(channelsRslts)
    })
  }, [])

  return {documents}
}

export default useCollection