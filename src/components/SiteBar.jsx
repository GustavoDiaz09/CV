import { profile, copy } from '../data/resume'

export default function SiteBar() {
  return (
    <div className="sitebar">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>{copy.footer.made}</span>
    </div>
  )
}
