import PropTypes from "prop-types"
export default function Titulo({ children }) {
  return (
    <p className="text-sm sm:text-lg text-center text-green-500 font-bold">{children}</p>
  )
}
Titulo.propTypes = {
  children: PropTypes.string.isRequired,
}