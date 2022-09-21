import React from 'react'
import Producto from './Producto'
import { Row, Col } from 'antd'
import './ProductoList.css'

const Productolist = () => {
  return (
    <Row gutter={16}>
      {Array.from(
          { 
            length: 100,
          },
          (_, index) => (
            <Col className="gutter-box">
             <Producto />
            </Col>
          )
      )
          }
    </Row>
  )
        }
export default Productolist
