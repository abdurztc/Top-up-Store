

export default function SignUpForm() {
  return (
      <>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
          <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
          <div className="pt-50">
            <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
              Full Name
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="name"
              name="name"
              aria-describedby="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="pt-30">
            <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
              Email Address
            </label>
            <input
              type="email"
              className="form-control rounded-pill text-lg"
              id="email"
              name="email"
              aria-describedby="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="pt-30">
            <label htmlFor="password" className="form-label text-lg fw-medium color-palette-1 mb-10">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill text-lg"
              id="password"
              name="password"
              aria-describedby="password"
              placeholder="Your password"
            />
          </div>
          <div className="button-group d-flex flex-column mx-auto pt-50">
            <a
              className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
              href="/sign-up-photo"
              role="button"
            >
              Continue
            </a>
            <a
              className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
              href="/sign-in"
              role="button"
            >
              Sign In
            </a>
          </div>
      </>
  
  )
}
