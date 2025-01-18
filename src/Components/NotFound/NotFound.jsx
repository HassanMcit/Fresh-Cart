import notFound from '../../assets/images/error.svg'
export default function NotFound() {
  return (
    <div className="min-h-screen center-content flex-col space-y-10">
      <h1 className="text-secondary text-6xl font-bold">Not Found</h1>
      <img src={notFound} alt="NotFound" />
    </div>
  )
}
