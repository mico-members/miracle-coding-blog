import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { articleListAtom, currentPage, fetchData, filterIndexAtom } from '../config/store/store';
import { IPR } from '../config/types/dataTypes';

const Foo = () => {
  const [page, setPage] = useRecoilState(currentPage)
  const [filterIndex, setFilterIndex] = useRecoilState(filterIndexAtom)
  const seletor = useRecoilValueLoadable(fetchData)
  
  const click = (num:number) => {
    setFilterIndex(arr=>[...arr, num])
    console.log(seletor.contents)
    
  }
  return <div>
    <div id="3" onClick={()=>click(3)}>plus adela3</div>
    <div id="1" onClick={()=>click(1)}>plus daisy1</div>
    <div id="0" onClick={()=>click(0)}>plus Q0</div>
    <div id="reset" onClick={()=>setFilterIndex([])}>reset</div>
    {seletor.state === "hasValue" && seletor.contents.map(({id}:{id:number})=><div>{id}</div>)}


  </div>;
};

export default Foo;
