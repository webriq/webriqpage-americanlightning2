import React from "react"
import styled, { css } from "styled-components"
import { Search } from "styled-icons/fa-solid"
import { Algolia } from "styled-icons/fa-brands"
export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`
export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`
const focus = css`
  background: white;
  color: ${props => props.theme.darkBlue};
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    color: ${props => props.theme.darkBlue};
    margin: 0.3em;
  }
`
const collapse = css`
  width: 0;
  cursor: pointer;
  color: ${props => props.theme.lightBlue};
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
`
const expand = css`
  background: ${props => props.theme.veryLightGray};
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`
export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1em;
  background: transparent;
  transition: ${props => props.theme.shortTrans};
  border-radius: ${props => props.theme.smallBorderRadius};
  {highlight-next-line}
  ${props => (props.collapse ? collapse : expand)};
`
export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  width: auto;
  display: block;
  padding: 0;
  position: initial;
  box-shadow: none;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  right: 0;
  top: calc(100% + 0.5em);
  max-width: 30em;
  background: white;
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`
export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)
