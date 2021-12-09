/*
 * File: EmptyCell.tsx
 * Project: *
 * Created: Wednesday, 24th November 2021
 * Author: Mehdi Rashadatjou
 * -----
 * Copyright 2021 - 2021, ©*
 * -----
 */

type Props = {
  show?: boolean;
};

const EmptyCell = ({ show }: Props) => (
  <pre hidden={!show}>
    <code>
      <br />
      <h4 className="m-0">Cart is empty...</h4>
      <br />
    </code>
  </pre>
);

export default EmptyCell;
