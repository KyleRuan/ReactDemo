import React from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'antd';
import LoopImages from './LoopImages';
class Body extends React.Component {
    constructor() {
        super();
    };

    render() {
        const  images = [1,2,3,4].map(function (num) {
          return "./src/images/pic"+num+'.jpg';
        });
        return (
            <div>
                <Row>
                    <Col span={2}> </Col>
                    <Col span={20}>
                        <LoopImages images={images}/>
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
