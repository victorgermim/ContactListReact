import { useDispatch, useSelector } from 'react-redux'

import { Container, Content, LinkLogo, Title, CartButton } from './styles'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const HeaderPageProduct = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Container>
      <Content className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Title>Restaurantes</Title>
        </Link>
        <LinkLogo to={'/'}>
          <img src={Logo} alt="Logo" />
        </LinkLogo>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </Content>
    </Container>
  )
}

export default HeaderPageProduct
