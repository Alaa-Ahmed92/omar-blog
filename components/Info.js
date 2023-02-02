import React from 'react'
import { Nav, Tab, Row, Col } from 'react-bootstrap'

import Publications from './Publications'
import { Certifications } from './Certifications'
import styles from './../styles/components/Info.module.css'

const Info = () => {

    return (
        <div className={`${styles.infoContainer} pdd70`}>
            <div className='container'>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <Nav variant="pills" className="flex-md-column">
                                <Nav.Item>
                                    <Nav.Link className={styles.navLink} eventKey="first">What i do</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.navLink} eventKey="second">Certifications</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.navLink} eventKey="third">Publications</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.navLink} eventKey="forth">My skills...</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h5 className={styles.imgTxtContent}>With plenty of experience I can deliver the results you need.</h5>
                                    <div className={styles.imgContent}>
                                        <div className='row'>
                                            <div className='col-md-7'>
                                                <div className={`${styles.glitch} ${styles.img1}`}>
                                                    <img src='/images/skills/06.jpg' className='img-fluid' />
                                                    <div className={styles.glitchLayers}>
                                                        <div className={styles.glitchLayer}></div>
                                                        <div className={styles.glitchLayer}></div>
                                                        <div className={styles.glitchLayer}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-5'>
                                                <div className={`${styles.glitch} ${styles.img2}`}>
                                                    <img src='/images/skills/02.jpg' className='img-fluid' />
                                                    <div className={styles.glitchLayers}>
                                                        <div className={styles.glitchLayer}></div>
                                                        <div className={styles.glitchLayer}></div>
                                                        <div className={styles.glitchLayer}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h5 className={styles.imgTxtContent}>Certification is the provision by an independent body of written assurance.</h5>

                                    <Certifications />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h5 className={styles.imgTxtContent}>With plenty of experience I can deliver the results you need.</h5>
                                    <div className={styles.imgContent}>
                                        <Publications />
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="forth">
                                    <h5 className={styles.imgTxtContent}>Skills are something we learn through experience.</h5>

                                    <div className={styles.laptop}>
                                        <Tab.Container defaultActiveKey="penTest">
                                            <div className={styles.laptopToolbar}>
                                                <div className={styles.toolbarActions}>
                                                    <div className={styles.action}></div>
                                                    <div className={styles.action}></div>
                                                    <div className={styles.action}></div>
                                                </div>
                                                <Nav variant="pills">
                                                    <Nav.Item>
                                                        <Nav.Link className={styles.tabWindowLink} eventKey="penTest">Penetration Testing</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link className={styles.tabWindowLink} eventKey="computer">Computer Skills</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className={styles.screen}>
                                                <div className={styles.numbersEditor}>
                                                    <span>1</span>
                                                    <span>2</span>
                                                    <span>3</span>
                                                    <span>4</span>
                                                    <span>5</span>
                                                    <span>6</span>
                                                    <span>7</span>
                                                    <span>8</span>
                                                    <span>9</span>
                                                    <span>10</span>
                                                    <span>11</span>
                                                    <span>12</span>
                                                    <span>13</span>
                                                    <span>14</span>
                                                    <span>15</span>
                                                    <span>16</span>
                                                    <span>17</span>
                                                    <span>18</span>
                                                    <span>19</span>
                                                    <span>20</span>
                                                    <span>21</span>
                                                </div>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="penTest">
                                                        <div className={styles.skillsContent}>
                                                            <ul className={`${styles.skillList} list-unstyled`}>
                                                                <li className={styles.skillListItem}>Internal / External Penetration Testing (Web Application - Network - Mobile)</li>
                                                                <li className={styles.skillListItem}>Mobile Application Penetration Testing</li>
                                                                <li className={styles.skillListItem}>Buffer Overflow</li>
                                                                <li className={styles.skillListItem}>Exploit Development</li>
                                                                <li className={styles.skillListItem}>Social Engineering</li>
                                                                <li className={styles.skillListItem}>Google Hacking (Dorks)</li>
                                                            </ul>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="computer">
                                                        <div className={styles.skillsContent}>
                                                            <div className={styles.codeSkills}>
                                                                <code>
                                                                    <strong>{'const computerSkills = {'}</strong> <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>"Scripting-Languages"</strong>: ["Bash", "Python", "Ruby", "Go"], <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>"Graphics"</strong>: ["Adobe Photoshop", "After Effect"], <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>"Operating-Systems"</strong>: {'['} <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} <strong>"Windows"</strong>: ["XP", "Vista", "Se7en", "Ten"] {'}'} <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} <strong>"Linux"</strong>: ["Redhat-Based", "Debian-Based", "Kali", "Linux"] {'}'} <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{']'}, <br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>"Programming"</strong>: ["HTML", "CSS", "Javascript"] <br />
                                                                    {'}'};
                                                                </code>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div></Tab.Container>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}

export default Info