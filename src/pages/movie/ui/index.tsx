import { useParams } from 'react-router-dom';

import { Header } from "src/widgets/header"
import { MainSection } from "./main-section/ui";
import { Tabs } from "./tabs"

import "./index.css"

type Params = {
  id: string | undefined;
}

export const MoviePage = () => {

  const { id } = useParams<Params>();

  if (!id) {
    return <div>Id is missing</div>;
  }
  
  return (
    <>
      <Header />
      <div className='moviePage'>
        <MainSection id={id}/>
        <Tabs id={id} />
      </div>
    </>
  )
}