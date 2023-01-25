import { useState } from 'react';
import * as queries from '../queries/queries';
import { API } from 'aws-amplify';
import { censorAllButFirstAndLast } from '@aws-amplify/ui';


type Task = {
  id: BigInteger,
  name: string,
  hour: Date
  createdAt: Date
  updatedAt: Date
}
//TO DO: INSERIR DADOS NO GRAFICO!
export default function Index() {
  const [tasks, setTasks] = useState<String>();


  return (
    <h1 className="text-3xl font-bold underline text-neutral-200">
      Hello world!
    </h1>
  );
}
