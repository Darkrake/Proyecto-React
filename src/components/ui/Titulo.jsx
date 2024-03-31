import PropTypes from 'prop-types'

export default function Titulo({ children }) {
  return <h3 className="font-bold text-lg mb-2 w-fit text-slate-700">{children}</h3>
}
Titulo.propTypes = {
  children: PropTypes.node.isRequired
}