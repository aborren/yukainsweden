import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <a href="https://www.instagram.com/yukainsweden/">Instagram</a> &middot;{' '}
      <a href="https://www.twitter.com/yukainsweden/">Twitter</a>
    </div>
  </Container>
)

export default Footer
