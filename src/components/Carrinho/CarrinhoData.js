 
import { CarrinhoContainer } from "./styles";

function CarrinhoData({ cart, setCart, setShow }) {
  let precototal = 0;

  function removerProduto(id) {
    const arr = cart.filter((produto) => produto.id !== id);
    setCart(arr);
  }
  function aumentarItens(card_id) {
    setCart((cart) =>
      cart.map((produto) =>
        card_id === produto.id
          ? { ...produto, amount: produto.amount + 1 }
          : produto
      )
    ); //teste
  } 

  function reduzirItens(card_id) {
    setCart((cart) =>
      cart.map((produto) =>
        card_id === produto.id
          ? { ...produto, amount: produto.amount - 1 }
          : produto
      )
    );
  }

  return (
    <CarrinhoContainer>  
    <div className="carrinho">
      {cart.map((produto, indx) => (
        <div className="carrinho_dentro" key={indx}>
          <div className="cart_img">
            <img src={produto.imagem} width="200px" />
            <p>{produto.name}</p>
            <p> - R$: {produto.valor}</p>
          </div>
          <div>
            <button onClick={() => aumentarItens(produto.id)}> + </button>
            <button>{produto.amount}</button>
            <button onClick={() => reduzirItens(produto.id)}> - </button>
          </div>
          <div>
            <span>{produto.valor}</span>
            <button onClick={() => removerProduto(produto.id)}>Remover do carrinho</button>
          </div>
        </div>
      ))}
      <div className="valor_total">
        {cart.map((produto) => {
          precototal = produto.valor * produto.amount + precototal;
        })}
        <p>Valor total das suas compras: R$: {precototal}</p>
        <button className="botao_voltar" onClick={() => setShow(true)}>Voltar às compras </button>
      </div>
    </div>
    </CarrinhoContainer>
  );
}

export default CarrinhoData;
