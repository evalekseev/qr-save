import { QRCode, QRSvg } from 'sexy-qr'
import fileSaver from 'file-saver'
import styles from './styles.module.css'
// import reactLogo from './assets/react.svg'
export const Downloads = () => {
  //   const svgCodeMportal = useMemo(() => {
  //     const qrCode = new QRCode({
  //       content: 'MLyaaaaaaa',
  //       ecl: 'M',
  //     })

  //     const { svg } = new QRSvg(qrCode, {
  //       fill: '#34324E',
  //       cornerBlocksAsCircles: false,
  //       size: 200,
  //       radiusFactor: 0.75,
  //       cornerBlockRadiusFactor: 2,
  //       roundOuterCorners: true,
  //       roundInnerCorners: true,
  //     })

  //     return svg
  //   }, [])

  const svgCodeBase = (() => {
    const qrCode = new QRCode({
      content: 'MLyaaaaaaa',
      ecl: 'M', // 'L' | 'M' | 'Q' | 'H'
    })

    const qrSvg = new QRSvg(qrCode, {
      fill: '#182026',
      cornerBlocksAsCircles: true,
      size: 200, // px
      radiusFactor: 0.75, // 0-1
      cornerBlockRadiusFactor: 2, // 0-3
      roundOuterCorners: true,
      roundInnerCorners: true,
      preContent: '<!-- QR Code -->',
    })

    return qrSvg.svg
  })()

  //   const svgCode = svgCodeMportal
  const svgCode = svgCodeBase

  const markup = { __html: svgCode }

  const handleDownload = () => {
    const blob = new Blob([svgCode], { type: 'image/svg+xml' })
    fileSaver.saveAs(blob, 'qrcode.svg')
  }

  return (
    <div>
      <h2>Download QR</h2>
      <div dangerouslySetInnerHTML={markup}></div>
      <button className={styles.button} onClick={handleDownload}>
        Скачать QR-код
      </button>
    </div>
  )
}
