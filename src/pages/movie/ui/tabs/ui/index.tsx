import { Tabs as ReactTabs } from "src/shared/ui/tabs"

import { useMovieQuery } from 'src/pages/movie/api';

import "./index.css"

interface IdParam {
  id: string;
}

export const Tabs = ({ id }: IdParam) => {

  const { data } = useMovieQuery(id)

  const tabsItem = [
    {label: "Описание", content:`${data?.data.description}`},
  ]

  return (
    <ReactTabs itemTabs={tabsItem}></ReactTabs>
  )
}