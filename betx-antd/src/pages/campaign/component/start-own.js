import React from 'react';
import {Input,InputNumber  } from 'antd';

import greyLogo from "../../../assets/imgs/logo-grey.png";

class Starter extends React.Component {
    render() {
        return (
            <div className="betx-block">
                <div className="block-header">
                    <h4 className="block-title">我发起的竞选</h4>
                </div>
                <div className="block-content">
                    <div className="block-bg-content">
                        <div className="start-own">
                            <div className="betx-table-wrapper">
                                <table className="betx-table">
                                    <thead className="betx-table-head">
                                    <tr>
                                        <th>排名</th>
                                        <th>累计代币</th>
                                        <th>当前助力状态</th>
                                        <th>我的投注</th>
                                        <th>我的权益占比</th>
                                    </tr>
                                    </thead>
                                    <tbody className="betx-table-body">
                                    <tr>
                                        <td>2</td>
                                        <td>10000BETX</td>
                                        <td>100/1000</td>
                                        <td>500</td>
                                        <td>10%</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="start-panel">
                                <div className="run-declaration">
                                    <div className="declar-title">
                                        <h5 className="run-title">竞选宣言</h5>
                                        <div className="declar-extra">
                                            <span className="letter-count">5/100</span>
                                            <button className="betx-btn betx-btn-sm">发表</button>
                                        </div>
                                    </div>
                                    <div>
                                        <Input.TextArea defaultValue="我就是我的宣言~" className="betx-textarea no-border"></Input.TextArea>
                                    </div>
                                </div>
                                <div className="run-data">
                                    <div className="run-block">
                                        <div className="run-assistance">
                                            <h5 className="run-title">竞选加注</h5>
                                            <div>
                                                <div className="betx-input-item">
                                                    <img className="input-logo" src={greyLogo} alt=""/>
                                                    <Input type="text"/>
                                                    <button>助力</button>
                                                </div>
                                                <div className="run-last" style={{width:'351px'}}>
                                                    <span>可用</span>
                                                    <span>5000BETX</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="run-block">
                                        <div className="flex-box">
                                            <div>
                                                <h5 className="run-title">购买助力额度</h5>
                                                <InputNumber  className="buy-input" type="text" defaultValue="5000"/>
                                            </div>
                                            <div>
                                                <h5 className="run-title">费用</h5>
                                                <div className="betx-input-item">
                                                    <img className="input-logo" src={greyLogo} alt=""/>
                                                    <Input type="text"/>
                                                    <button>助力</button>
                                                </div>
                                                <div className="run-last">
                                                    <span>可用</span>
                                                    <span>5000BETX</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default Starter;