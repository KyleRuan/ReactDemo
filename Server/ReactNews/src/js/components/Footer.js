import React from 'react';
import {Row,Col} from 'antd'
const Footer = function () {
    return (
      <footer>
        <Row>
          <Col span={2}/>
          <Col span={20} className="footer">
            <span>&copy;&nbsp;2017 ReactNews. All Rights Reserved.</span>
          </Col>
          <Col span={2}/>
        </Row>
      </footer>
    );
}
export default Footer;
