import React from 'react'
import Link from 'next/link'
import { FiEye } from 'react-icons/fi'
import { BsCalendarWeek } from 'react-icons/bs'

import Footer from '../../layout/Footer';
import Tweets from '../../components/Tweets';
import SubHeader from '../../components/SubHeader'
import { TagsBlock } from '../../components/TagsBlock'
import styles from './../../styles/pages/Blog.module.css'
import BreadCrumbBlock from '../../components/BreadCrumbBlock'

const SinglePost = () => {
    return (
        <div className={styles.singlePostBlock}>
            <SubHeader>
                <div className='container'>
                    <h1>Articles & Resources</h1>
                    <BreadCrumbBlock>
                        <li className='breadcrumb-item'>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className='breadcrumb-item'>
                            <Link href={'/blog'}>Blog</Link>
                        </li>
                        <li className='breadcrumb-item active'>Vulnerability management with Wazuh open source XDR</li>
                    </BreadCrumbBlock>
                    <div className={styles.postInfo}>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className={styles.postInfoBlock}>
                                    <img src='/images/omar-photo.jpg' alt='Omar Salama' />
                                    <Link href='/about'><h5>Omar Salama</h5></Link>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className={styles.postInfoBlock}>
                                    <BsCalendarWeek />
                                    <span>Dec 22, 2022</span>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className={styles.postInfoBlock}>
                                    <FiEye />
                                    <span>500 Views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SubHeader>
            <div className={styles.postWrapperBlock}>
                <div className='container'>
                    <div className={styles.postImg}>
                        <img className='img-fluid' src='/images/blog/3.jpg' alt='image' />
                    </div>
                    <div className={styles.postContent}>
                        <p>Organizations struggle to find ways to keep a good security posture. This is because it is difficult to create secure system policies and find the right tools that help achieve a good posture. In many cases, organizations work with tools that do not integrate with each other and are expensive to purchase and maintain.</p>
                        <p>Security posture management is a term used to describe the process of identifying and mitigating security misconfigurations and compliance risks in an organization. To maintain a good security posture, organizations should at least do the following:</p>
                        <ul>
                            <li><strong>Maintain inventory:</strong> Asset inventory is considered first because it provides a comprehensive list of all IT assets that should be protected. This includes the hardware devices, applications, and services that are being used.</li>
                            <li><strong>Perform vulnerability assessment:</strong> The next step is to perform a vulnerability assessment to identify weaknesses in applications and services. Knowledge of the vulnerabilities help to prioritize risks.</li>
                            <li><strong>Ensure secure system configuration:</strong> This involves modifying system settings in order to increase overall system security by mitigating risks. Actions such as changing default settings, identifying and eliminating misconfigurations tend to improve organizational security posture.</li>
                        </ul>
                        <p>Wazuh is an open source unified XDR and SIEM platform. It is free to use and has over 10 million annual downloads. The Wazuh platform has agents which are deployed on the endpoints you want to monitor. The Wazuh agent collects security event data from the monitored endpoints and forwards them to the Wazuh server for log analysis, correlation, and alerting.</p>
                        <p>The Wazuh platform has several inbuilt modules with the aim of improving the overall security posture of an organization. We have highlighted some relevant Wazuh modules in the following sections.</p>
                        <p>The Wazuh system inventory module gathers information from monitored endpoints where the Wazuh agent is installed. This module collects the following classes of information from the endpoints:</p>
                        <p>The Wazuh vulnerability detector module is used to discover vulnerabilities that may be present in the operating system and applications on the monitored endpoints. The Wazuh server builds a global vulnerability database from publicly available CVE repositories. This information is cross-correlated with the endpoint inventory data to detect vulnerabilities. An example result of a Wazuh vulnerability scan is shown below:</p>
                        <p>Organizations struggle to find ways to keep a good security posture. This is because it is difficult to create secure system policies and find the right tools that help achieve a good posture. In many cases, organizations work with tools that do not integrate with each other and are expensive to purchase and maintain.</p>
                        <p>Organizations struggle to find ways to keep a good security posture. This is because it is difficult to create secure system policies and find the right tools that help achieve a good posture. In many cases, organizations work with tools that do not integrate with each other and are expensive to purchase and maintain.</p>
                        <p>Organizations struggle to find ways to keep a good security posture. This is because it is difficult to create secure system policies and find the right tools that help achieve a good posture. In many cases, organizations work with tools that do not integrate with each other and are expensive to purchase and maintain.</p>
                        <p>Organizations struggle to find ways to keep a good security posture. This is because it is difficult to create secure system policies and find the right tools that help achieve a good posture. In many cases, organizations work with tools that do not integrate with each other and are expensive to purchase and maintain.</p>
                        <p>Organizations struggle to find ways to keep a good security posture. This is because it is difficult to create secure system policies and find the right tools that help achieve a good posture. In many cases, organizations work with tools that do not integrate with each other and are expensive to purchase and maintain.</p>

                        <TagsBlock />
                    </div>
                </div>
            </div>
            <Tweets />
            <Footer />
        </div>
    )
}

export default SinglePost;