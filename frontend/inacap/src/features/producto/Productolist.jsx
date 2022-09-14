import React from 'react'
import Producto from './Producto'
import { Row, Col } from 'antd'

const Productolist = () => {
  return (
    <Row>
      {Array.from(
          { 
            length: 100 ,
          },
          (_, index) => (
            <Col>
             <Producto />
            </Col>
          )
      )
          }
    </Row>
  )
        }
export default Productolist
