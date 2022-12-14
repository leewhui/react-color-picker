import {css} from '@emotion/css'

export const inputBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;

  span {
    font-size: 13px;
    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    user-select: none;
  }

  input {
    height: 20px;
    width: 60px;
    padding: 3px;
    border: 1px solid #eee;
    font-size: 13px;
    background: #fff;
    outline: none;
    box-sizing: border-box;
    text-align: center;
  }

  &:focus-within {
    border-color: #777;
  }
`
