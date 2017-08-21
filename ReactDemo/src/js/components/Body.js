import React from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'antd';
class Body extends React.Component {
    constructor() {
        super();

    };

    render() {
        return (
            <div>
                <Row>
                    <Col span={2}> </Col>
                    <Col span={20}>
                        <h1>开始你的表演</h1>
                    </Col>
                    <Col span={2}> </Col>
                </Row>

            </div>
        );
    }
}
Body.propTypes = {

}
export default Body;
