interface SpaceEyeVideoLightboxProps {
  open: boolean
  onClose: () => void
}

export default function SpaceEyeVideoLightbox({ open, onClose }: SpaceEyeVideoLightboxProps) {
  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(14,13,11,.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vw' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: 1100, aspectRatio: '16/9', borderRadius: 14, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,.55)' }}
      >
        <video
          src="https://videos.pexels.com/video-files/2062566/2062566-hd_1920_1080_24fps.mp4"
          autoPlay
          loop
          controls
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', background: '#000', display: 'block' }}
        />
      </div>
      <button
        onClick={onClose}
        aria-label="Close video"
        style={{ position: 'absolute', top: 26, right: 30, width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(255,255,255,.32)', background: 'rgba(0,0,0,.3)', color: '#fff', fontSize: 22, lineHeight: 1, cursor: 'pointer' }}
      >
        &times;
      </button>
    </div>
  )
}
