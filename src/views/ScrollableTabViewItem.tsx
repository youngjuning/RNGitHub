import React from 'react'

interface Props {
  tabLabel: string
}

const ScrollableTabViewItem: React.SFC<Props> = props => <>{props.children}</>

export default ScrollableTabViewItem
