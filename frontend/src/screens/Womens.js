import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

const Womens = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />

      <Container>
        <h1>Women's Collection</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.map((product) => {
                if (product.category == "women") {
                  return (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                      <Product product={product} />
                    </Col>
                  );
                }
              })}
            </Row>

            {/* <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            /> */}
          </>
        )}
      </Container>
    </>
  );
};

export default Womens;
