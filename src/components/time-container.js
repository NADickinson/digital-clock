export const TimeContainer = ({ text }) => {
  return (
    <div
      style={{
        fontSize: '2rem',
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100px',
        minWidth: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
      }}
    >
      {text}
    </div>
  )
}
