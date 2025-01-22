import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <Link to={"/product/" + product.id} className="ProductItem">
      <ul>
        <li>상품명:{product.name} </li>
        <li>판매자 이메일: {product.email}</li>
        <li>상세설명: {product.body.slice(0, 80)}...</li>
      </ul>
    </Link>
  );
}
