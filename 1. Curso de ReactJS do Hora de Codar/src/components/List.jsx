import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento="2020" />
        <Item marca="Volkswagen" ano_lancamento="2021" />
        <Item marca="BMW" ano_lancamento="2022" />
        <Item marca="Audi" ano_lancamento="2023" />
        <Item />
      </ul>
    </>
  );
}

export default List;
