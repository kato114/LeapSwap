import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 72" {...props}>
      <image  width="96" height="72" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABICAYAAAAJZ/BjAAAAAXNSR0IB2cksfwAAK6tJREFUeJztfAe4nFWd9+9tM+/0mdt77s296YU0EnqJBFAISFOqZXX3U9HVx4L7PerqsytuUVdd2Q87soJSIogKSy+BJKRA6k1yE3J7m1unz7z9+5/zztzchAQSDIKPe5J7587MW87519+/nFfu2Loef8lDFxUMDgwgky+UtT/3+/8Y2P7UWskxIPJvHTiCAIH/yf5mf9B7h73wX+xjCELp++Kx7pl0SPEdvdi2DYg+e/77PvzTZedf+vWRkbghyQo8dFw04EOsphaT46NwRAm2IAn3f/vL7SsuvvKHp5190Z26Vjju/OW3izB/rqF4vCgUCs2b1v34oZHdLy5VFAmm4JJfOOpYp/gqHPXZEUQvHuFM+z11rlPApt987/9ODHQuazvjks+V1zbs99gmPDQHj9cLhX4sbwjtG579++H9O+b1NbZccf6l196py9njzl8+epJ/KYMRRFEU9A0NLX7+nv/8XerQlha/z0tSKk07QnqDKxzriiTlnOBi8W9n6r3D3ysIKQ56Nv3xkv72La/WLjzjscq6lg2V1fWdobHRQioxEe7at+Pyjhd++yF23HjvocbBnk54y2u4hh1ryGnrL5MFoiRCzxSij9zx9UfGO7Y1q2QGmFkprVPgdqVE0JMdDo7UDZv/5X4qQCbGm6m4r/uFh645JIrXQJTJ7DDT5kC2dEgKM0NAtK65SymrRQGyKoo4ph2SJfHYnHm3D6/qxe5Nz31k8jVGfBViiUKMRMKfIlRFejhikf6HmcFvUfQjHo8HHqX4HfMn7D+/r8pN17jhQWTmkq4Nzzz+D7MXLvmJx6sWnGNogWyclJq+O4ZI4pTO6b7tzzx8q0gmR5wiOL0W7f+REnyiY5rVLxLVddal67mmibNiiuCC+16YpiX0K+QBtt33vc/46ls7W1ub/j2b0o95RzmfzZ3kJN/5wRxv9/6dl44e3NEWIE2Ycq7CdJK/BS0QinR3GDqyOC+Fo1y2+14oEr/0KfsRiwxwNdAr27CyKTS1zd3aOGeZreeP7YhlMz1+8hN9h4eo+jDQvnWtaFnTzMSf6stKEk8kJi7Ec2RioCOimGBw0+HfOzhM9yPvd/id67Atm36Tn6qsb3kpMz4IvXBsKCpX1DUSp8XDGO3dNoorYzic2VCRxNJy4BvpbD9P4tbzVBC/dCOH/7MMC00zWrDirPPwzCP3kSQn4CNNEyTXvAhH6UVpuDOx+TG2rqNq1oqB5tPOui+vmfSZeIwziAFjSQ2ZzOSf6LjexsGlTkQ0EuVvZcWDwe4D5072dbR6vAonxZuxwHFKjtmVMv6bm20itmNz4yGIwpTJlyQB2bEhzG1pwDnf+jc88dRT2LF5I5LxAXhkET6PwhxR8epC0TvYfK6WYUA3bEjhmvTy933ob2fOaBrTC/njzlCeSGQQj/e/axnA5pVOJtE6sw0tbbMI8XnRvvGJW618BhKZosMkPf78D6/tsJprmgHTkeELhmGaOrRcFkRbgoUCMYBYkk/hzh98H+euWYOqqkq0LT+HHKuEro52DPV2wcqlIXFzJXIWSAJXDcjhSrNx9oon55992dcjZWXbTEN/3b2nD1kU2Q2ldy0DGOKxSbK6976KBXPbcGD3xrWdmx6/zMOkcIrw01DQcUYp5eDYFlJ5C/VzFuLCi96DlqY65PIa9u4/gI69+5CKjyOvTUI3szDSY3h03f1Qw2VYffHFuOnay2EYl6Krtw/76fj40AjSmTRMkvqcKVih5tP+vX5G2wNl1TU7BEHm2vBmg6cibJoUY8BxgrV3dDDzwey/JErCni0bbnn6l9+5U8gnJMHn44HPiXiAkgli60sWbJz13itwy43XwENSq+sGmBDObWuCddkaFHI6Mrkckuk0J2As6EdlWYiCKwU9A3GM5yxkdRX+lmWklQ4iBDcbYj4YljCejc366uT4pD0+Nkb+QnEBvuMcNwpmQxbIs5SV10ORHbA8SgnK2VPnOByWvVMKwgBCJBKteXHdLx7ccu+z50gmfagISGRsVPrBI87pmZ8jp1kKi12gmM7nsfjsNbjlA1fCIdOQNzV+CEPwll6AQuYn6lNQFQ4hHfHh0ISBp/o0vLJDx96Eib58ACkKsDSbgICocL/hI7pVy1ksCSSFm94jzJ85c8GecIOOAmmGRabN9gaIfvZx1yczVfH6q5FJTWBmTSMKukZ2kGCGKkKWi4QvwjMmSa+/mLvkUjDkTH3mnBKNYgwwtMLI+NKV/5KurrjR1rWG8plzn9i3+blbsoe2zRM9JfILx7SyTjF8tUwDwfI63HT9NRwoaqZJrzLnnkAmWCXi54hoL782iee6NbwwoqI9G0XCCiEgW6jzapgXyKPGn0JEFbh0T+Yd7Et50K7X4ECuofLQs8OPfvfq8MpwNBb3ePx8VmmyLm80pkyQrptk32wkkib9pOH1CAgEQlC9IlSVCZFFAZAEr9eHI+XM4YvTdJ1/zhEtMclD2uQCBVeD3jIDHGYmdDtSVvnYGRde+pg/GCTk4kg9W5/+dMZxpmbisEj0GFDPKR6T1S2cffqZqIiEyObn+NyChKKYBiVTBTy4N4lfH1KxJVGLPB3b4svhsspRrK63sLBSRG3Uj7DPQzRQyWfKXKkYgioUdDzZvh2f31aO3cKipt+/0n/r2qXiP+b140v96xjAF1pcCZsY+9sksF0okKRoRGBSuXyuAH8ggMbGBpJKGW5eg6TO1olxE4iPDrOziUESoQqNpYjJpMloqq+ka+rF6588I5gGMO2yKehicM4mtZ4YHW1JjMUrBJb5LDlXl9w4WjjYO9O0EKiow5qLzieHqYHcCZ1j46ktvfjdC33YQjZ9d9UFCDo5vLdiCFe1Ame1BFAbruEAxbDd2EBwTB5gZSmq9cgkYLIHITJXp1XTWts7YC1vwfa4cMWHQuo/hR3BPBEDcNx6APcFwmGGlH4OJ6em50gOR4jucQJphIGCZhOi8CNLIXlqcpBDtpMerBjCiK+E0Dcyibmz2zDWvusCM0laToS0SjZySsucI05mhimbN3D26pVoqAqTdBtk60V8+zeH8MsnRIyT/zOWLsN5nkP46sIkzp1bC6OYjtAJppqaxZ0oEwJmfbsmbCQRgyoWUOvV0RwK4+GXR5BLVyE4GUdfWdXsnv7+2oAq99knwIG3rSAjcIzs+hCGuROJ5FtjgHs1fm6hoEUO7dx84bP3fP97gmXAkf1Fb3NszeL6wApZqh9nnrmSgIUFL4H9Z1+N4+f/Q5oa9UFZvhizxBHcc6mEykgjdnRPIusph6jn0BTKoSzkh0WazfzG7oEkqlddheWtc8As+/pHfgUhPoqhnEPX9ZKdS2EiV+7LKdGZ9Q31fbphvunK3vaKGDNVqhrA3LnzeIBjn4hYHGNIsoz44MCiFx64+xvkTHtGPWW1Zry9LOSTiBgSRzKvv7IAk0xkuKwBddUVZIrINxGw2NNF6EQKwQpZ0BQflot9qI/WYcOhBMoWX4LT5y9EKpPFtifvIzCiQyUImsnkUAg0oI2Ib5AZ7O7uRd3cldj10v04Z/UZxNS9GC1YvCTZO1FogDdJx72xA2bjz1CSZEZaIkRF/oEk0ev1kEk5MQc1fTBf4G1seGnppdet8Idi1s8PBjbuWf/7M5aNPIYycwJ+UeOwkGsdSwyIbu3XJClsrKtCTVSFbeQ5qxKJLERLgeXx8hhjRsSigCoLPdyIBUR8NkLk7+YuvwC5vf9DzlpGhkxXiFAU07Unn34W13/gA/jkrbdiWWsFFsybg/LYQYxkDbDERtdIMsKcPvOjbzb+bDVhg3D3JKGN8ogfAUIysiSdVAJQIO2xiKK2v9wcFishKFpqdNFN2JBbDd/YAUST+xDKDSKoj8NnZqDYGhGb/BAZbp8dxUOvjqJvMovXEiJezAVgBskkmlGwepRN9n4iq6G8oZnf66UNL+LzX/girrziSly7ooozlW5PsUKef//8s88hQ4Ha/fffj7ZP3UDM8qKszA8nOc4FZcfBvnKWG/qTnPCpHmwRFjnTkf5DUILl6BzPcbt6wueTRJMPQG9CJ7OSgZAwkh57JpxIHfKxBhRwAQYJ20tGjsS+ANlgxLK5FmwgVvxykwcmQ02KH77mCKTsZoiDI2CU7c0z5AYyTy457rzzTmzdvAVDg0N43w8+DzEURMjvxaGRHv59JBrmr9nEKFrKJIwN91IgqxAzyU9R9DyjMaysaimHfgKa/mftiuBMoJjDL9moioXfMEI85vmE4WfUCvBTPPL/fvtceUGmCJ78i0gEBzlYSB5khSCxlXA6EdpSVPhZEGObkOleilP0FIzaZXWwu/ugaAV0OTF4FQ1DfYeAhUtRgrJ6IYuInxhHpwRUD+p9Sezd/hIuWnMxHn7wflxyehvOWdyGx3dsweCQ4SbxSKzKQkGzujwCzXiXMYANFj4EKACaWRFze21O6lyH5+VFPR9t6Hp0/uLJFzA45/3IVi6A7YtBnOzD+4KduHSmABYgv9Rv4qHJZmjhJlZK58GaG81TDFzdACn4CjzD3ehqqkFKGIE38xoO7N+Dz33hNuxp34ez2mKoq4rAoUAzldMoMA1CH3wFIcmH3/3H35Nf8fOy/6wyLzKJAWQrWgieCmirq9gt+cuhvDuc8OsHy24amsZfTyY046npsUzLhofu+qHRv6tmOa1v3s6dGFab0elfiOvPbcNXL22E6g+QzyngxhU2zHWduGsiAI/PS1pAiIZ8g0e0oU2Q4y7IsOk1XteIl7syuHlFNXa3PwHNW4Ef/MOHMbfKA4ec+F0bBnD31nFkCgYayzxYUKPiknllpHQmQqqAyrAHDW3ATrURy3xm/Ozm6PpAgJy8fTR5i8X9aYm1PzsDhGJUa+ZSZI99LhNONNPndq7lwrGqbQ2r1uq27DVGtj/xgaZUO+aFsvjsmougUbywa283GqrLURH24dOrQljauw9BMiERj4UYReplIQnf/81BPFdoJtjInLGJP3YruG6Jjjn15RS3UNRfGYSoePDNdTux4cAYLmqQMK8hhpxF0JYi4F+u78JojtTMoyKuedHpW4LWcil1w3zf35YHveMsG/D6dgc3mjVYeZLiGLbud0QDeAWJbLZDDtPjCxFeLjVBvcl5xCy/T40vXHnuNwznfJYOUNaPd5+5d+u2xnNXrURFLISN2zs41lfJzOmajgW1KhbVkz8gpMPuaROD2HeXnR7F+r15yDppx+Q4XrSr8eK+Q3jvilY6zuEVrjuf2EeRs447blqAusoYgmTXCroJjyLihjPqcXA4iz0jOgbzIgw7v33+grYbcgY6dFvideUjYnKhGJUnxzA2MowYOXbF43/nWhO58aGFxoI+TCTTFP4fu876uvOY+dI13gFXU11rnHfDpz+zb+8nflddUUYwkQIscritjQ285S+Z15DL5cjhRzlB3NQznU9A4KzFVWit6sP+4Vp4hsaQbpyLb2wfQzg0TNqi4kfre5HNZvHDW5aBFX8MInxGo7MFGTphfEWWsLAphiUz3HLk/nE8k5AzHQkiqU7+ACWAUdJuuvf4+DgxXy4Wh9wczzveG8rkhAVHDIvbJ5iqYExQCDIWSNKa5i175NxbPvdZXdT+xREcP1PzTE5HJOhH58Aov27PcAIrF83mTp+ZvDwFSJFwFJ++JofbfjYGbcQHp7sHr1QvwOVP9KLBHsFq0pyvvbeZIxsGf0uFEobcZNaXRIEbw1ShgI8YbegZf8tvw8EIIg4LwFznW+rOYyaXJfGY5DfOaDoiX/iOM6A0BJqkV1VQIOQgiaLbn3CctAUjZChMWJ6i6lwhj7Mvufo/C+MD/fHJ+P3NteVye2cfmmrK4aPvM7k8KqJBTjTNLjUXgkyJjjXLq/GLoIhfPxtHb7wbsfIo2ubW4pI2PxbVVVAQJ9P1yXHTddiMGBElknxmMncf7MPcthk8qh+1Iv+ueNSXWaa21P1W8nWjo2PweAMor66FIL7eK7xrGMAIrno8kD0CBgbi8PtVYogHx2rn4xpAx7KokxGAlRR9kcqHehPmTY1q7jtzmtE4MjaJIAVPoVAVmQ+DtCCOSjJFvP4Nt7iUzxewpDWKJbPLeC1EJTPFJF4n4F8wWFwhYWhkHOOJDBpryvicNPIrffEEZhJ0LQ/50JtTHxPK225n150+V5EYNTHUjeTECMqqGo5TLnoXMYANprGqV8UwmY4MLXrRivnwUSAkCKW+IPc4ZgaYTS+hJ75wsutquPKBnnzuBcEWr41UR+cMpKz2QtbclUkklwSczJf9Pt+MapJyliSzWAxiK9BYwtLmZTFkmW0mwjPzzTvfSIKb66qg+gIYHhuHNTwOhZBRUy0hrEgQfVnp5UJk5s0UHxScUkzjVqQgKyLXNdY6+UYo713FADZ48xWTQpJaSycnFZIx2DeMaCxGJkfkjVl+fxSZFGkMKMKVWKZULLYKOqyLIm6r0f9yVBH5dBplMRWSZWwKVc27p7uQvnXftt3/UlsWJG0I8/NYCkEh4pvkvBmTxSPaDgVu59nx9RVhFzKL9ENa15sWt2eCjTdFA4FJXi8o9gkZWpbvExBwYv7sXceA0ijVEthPf1ccdsqPqoYofCE/lIoIeg7G4cvnECQU1djiJ6n1E1MSvC6jGx7yJXrYY2ZWeUzt9HJFn+PJ9UbzmlGZyBRIuxKYIE3gHRf04/VIaKitRi0hKZvE3+BoyuHlSt5sxcqPpGEsujZJQwaz0t5saMYloWBo1C1GiTD1PE9FJ0f7EWNRNmnKiYy3lQGMiKwsKWpvtRDjDmaX+Si2tHETNK0Jmt2HaQ0jpmVaMSE38cEyKfvFxiqj1SMZUCLFzgTBhyVNi7hpMCmKZeca9Jol1LR9XxfuntyC8+fOwkzSNsZYD9l1ni5h2VBW5dMMDGjep+NW5NZqVR0Vi9U6WHmMdu1GpH7OmxedBJGnrFHsrH7bGMCK8gXN9Hd2j5ynKM7eukqpl5Z7yu/jOj6HCGqz5oCVZYX+u6LewnzOM8LszDIbnHGy24pIeN4pBkXst0xSWxYO4L1nL0H788/jZ5s24itnno+u3iH4iAkxcrTsHiNjSdzduU9ffeYH/k9YkjpHE5P0XRipiXGKHYK84auE+YViHZfdwSoKDRMS03JEKzf+Yb+en2/p8p2yLHWecgYwRMKa1g68lv74g3849MXc5OSc85baw++/+uxrPN7yjYXMqWswYnY3lytQRK0S2piYT8T/Y8xrVJpOMRtfagKF6yCnmssdd+eMXYxWHdMNrC6bvxDru15DdX05aqUajE4kkEzneLtijq6xyU7Z50miIXolpAwDIpk8u9T9VizBOuRL9PQEryH7nPz3GoP24rylf4nA9asxpfCTNo/5MTUooCOXmNQl51unlAHMVND/wMOPdt/x3Pqhj7RVjuGMC0UcGjBrvvatp59ZubL5jvNXVHyV1FTj6eM/9X7kRPOE09v3vabODmXvi3DiF6WwtIFCsKa1xRR7J45onHATZF7ShJ5MEpv8aTy8fy/+btUZvFGrpaEaoiXgs+v/gC4x5Q2a+tmL5p12H2s0mIgPIl8kPGeAKPNYIRnvJwgdRJkqNjQGxdWHUskfjHbu/vXyBt/HfBSiv7SvXxMrY1sDilh+yhjASo66ptXd+8CeBzdvT5/VXNYNtmnu3qcVzKmXcP0FYXVGZeaLDf7gMt3Ub7MF6RVRfGvawCtUCmuV0Wa9+kLnzdVlXReed0nLItNidscpbm4ReTrAJyokwTJ3qCxNYTlOcfudG5CJrCmLjmnvHcY3OzYh1xjE14degfqqggsbWjBOccCP9m7Dj51ONAQCQllm8Jup0dEXZY8ywBSJ2XOtUKiytPya3PCBWU4uNUnQczifyyYSKb07pBqoVq1z/Eido3qCeHnHQcTHEsoFMyrWDY/1TpwSBrDyoqFrtfc/3PGHrTuNZZbWg75xCtELXtz+8SguWFKJgOqjxbPmL2v1ZG702T4t8AVNDv4MJ9kpIbMNcKbt7dja+5WDL018Np2Mh6/4Rg0hEIUIrBNlWd7f4aYwncrjO5s2wU8wcm60HE2hCGp9QfgVhUfbBjnQSU3Dy0P9uL1vGw5W2AQavIhXWvhkfDNaB3Zi0jHQH7BYgILmCR8WVIVax7ND304YVTeapt4WRuYzUS33wcZysVoRxyES/GX9YVr+NXidAlkFhW9jraDAUdMtzGtrwOmLZ4m98bHwqK6uO2kGCMKR3cisnzST0mP3PNj+h137zWW2NQpLiGHJLA++ekM5TptVjnRWR6agF88QEPULYVXJ/nREM66zC8F/tWzhuRNpPlU8MhKTqYanfrHr7q6NmdVa3sKZa0nDZlegkC0A4uF5MdTC8kD32v3oZw24gyKChogKS0GYpFYhKmkkv2P0O+4nIFPtoXjAddSsrVYPC9hN5ovhedIhGJkcVvgrESWHa2YmrhoaTPy4uUy4sizkVMPxYLpBZd18CsUsQV+QB3WlGI1poiHZ2LB9L8ZSGgJVTaGTZoBpstKbq8Isyivks8Gf3LVx3fa9xnJFLKBQyOOGC1R846ON8BFzktk8ilsgildw+IRYU1VTQL9YK3RdLDrBB0at8MeJCenj3dfrUxAfGjvzxV8fuH+iw25kLZKeshTWrCnnOSNW7cK04Ecle/x0XyeGQg6kQIB3SaTo8xTfSMGOtV1nIHi4w5St4gyF0oYPIrxd3PNC6/XngbWzmmGSdqmSoC6MGX/HWjVtu9QTe3h9TnETH2Mmu7bIt8+6aG0smWMtMs6SebFC56TlPUkGkPfuaEdNdYwk37Wfv/jvrXc9u2l8tderYpyCkKvO8OIbH2nleZ08KzywCRT3VzlT2uM6Q5aj90gmGqTkB0izAnkr+kHJI2Yl3vYnqPR3QSbEIclCoGv/0E0HXhj5dmFYDqs+cnamg/JqC1VVPp4c4win2ApO8A6pXBb3DO2DVUHnT22t41sp3LrI9GWxubnuo7hLRnCTgcWDLNvAIjuIhVU1XADZtx7SxsM9Tg4ncumqpTZJtu5EzrZ6J4xHVNUTmlkur/EQFN/eN1FIBWauFaOhZ96SBtCUiAEC/vDYwe89t3HiWtUfQybZg6WNo/inv11NMFRBrkDHCQqfrCgczv+7reKHG8qdYnt4jZy+LF4Y+rHub7m549XeH6X3qRfl2/vHBa+pT8ZzdenezEzJJjOhulsZLSK6N6xxzM3zOkRYib0SugoqKv571x5slJJk64OQGIFtHN5xegzBet1fzGmz5BzjQsHEeyIzePtJ3jQ5YziQLeWi2C6ZYsGf3UISTK5d8axyKOGp//SkNfR4yFOBHkP8bE1Y//pFSwKxLktYqob9J88Ahr09pHp/fLTje/c+3PM5R2C1VgcRXwa3f3Ip6itjGE8WeMTHpIL8DiYKGPSJWk1MVUTrGDkSrvR0fKWYuOGlVzcOPP/g1puCZnXQqPC2Go7OM5gsZ8P3EPEV2xzRKB6KchkDDIfjfpbu9Xv8ODg6itv7X4FZ44XHLlJTKPWznjjyEook9eQEzK6o0w3b8TBhsorAodT67h7M9ivbvOEiYciphOP/jRmo+Ed/IDYiDw/R/GmeSugHB5O5x0OqdJ2sRp+WRefkImGG8z3kqR594uB37n+k/7OSpHLisLYNRQlCVVi+24KXtCNHRIln0DFq+r+tBCt+P5lP3Bp0El9n6ITZ7CnpKW2yYy3thGXrlLHbbryhCvFhLwa3G2DmpggYyaaKvCXcIbub0wqobiAmSzJvrWcbTQJ+Bf39SfzzA1vRuUxw4aflauCxtm+8KQNYB4uu4/RI0/6a1pXXvRqf/Gilz76qwocWhvxEHum6W1KZoI1k9HZDLnsY3sDPLUXtDlJE6kzfH0DaKXt9HYHK2m9KxETHyJ44AzyKzLrbIn94vPOe9VsnLxfIvHgltydTkixCOWX44p1duOa8DFoao/naOQu+PgLrJ4QOkxHmany13+ibyM9u8Os3sOKIPeW2XBYwu2uS+MyfVY8zls3Ck8/24+ev5CiarGQ5YgY9YQgZBMIs126goTGJS94zk6Tf5l1zrAj+2LN9+J9f5zFgl0NaGS/Ke7E267z5fsrDVVz3SKe4VWi2v26D6gnv0Tz4wv7JxD9XCqGLFCNzQT41FgpW1idMwbejoGV3Doxq7S0zIhrrW9KK22pfdzduDk1e2mTjhBjAitgDoyPL1v2h88c7O4wVXsK1Euuxgem6N5JI5nQPTLbhe49mjc9/csENtdG2RwJSAqnxIQxOaKiKUJRc1vqheG5IbpTT1/H8+dTGZ7HoGB0Y5DuyNEGfTyLHqKOY6geig/ibj4cxp7WSnK5B0l5NFknmvZ/s4RnJnImO/eMkVZUIqzYklhvi7hdT9X73ZXov0mFAUPpemPqMzBpLPRODF9a2bvHURZHoTUHOigk5VLmukLDXTRAMVuUgZH8FEXKY5jPBE9g4zp7gY403ZACz936Cf9t3dX103e8O/ufgmBRUKbrlBUOh6FSLcpPXKOKLaROf/OjpN1fXVGz+2d0b/qM6nMqff0bzD5KGODKaddDWEDQnzJq/6ZycrG+JiGfZR8QURxLAdZruFlAWvVZWAJVVYew51EdY3I/5oVpevnSRuozGugrc9uUGvLKpG1/5bh9EXYEVYLn7aWZ6Kjc0fUxLU0zNx80VMQkOSwFnXmXzFq/Xi/LaeqTTGu8HYjSQxKJWOdYbbsR7SwzwernJqXl842vffOL5gY/ZggqfX5x6utT0yZvkBFob5JGP3TJ7bU1VYNe3/mvL1omePQu/f2slXl4/9pEtXerzV1w6+6f1UfF5I5fKaErth5Lm2JaY6pSZrH1v2u4Zdzsa63xwikCOfIMHGO+swlf/YT/WXCng6vfNwOBoGlXlQQ4593QMYNeeCTTVRnBobxY+PQJPnuxyrNQgO53ob+wHSjvdXWaZmO2rPRQQPPvH4+xpWBR40j1PtqXyjcYRDGBTY5Gt6pXFffuGPvbS5omvHejON/JHs0huRxscCYf12oFmWIgGLP3m6+deM7utZcsDD+34YUf7awvv+mI92nsN3P6rZN1VqyZuXBiKXWen7O9PjmfWkUbEE4rz/RbP2D8111Zzk3LY/jqsaciFsba7F5jhe0uXsHhZEJ+4eTGe2LCLlwT9AQEBn4ccsoE//tpGSCLEIpchIOvwpmxk6otXdEp4ZvrOnmOMIiRmBsRigZ1m4pKmZfeGfP5C1ijwdUv+MCTN1cpTxgCGSFj+XvGI6Dswcsmz63tue3VvbjUcBYGAz508o4tQSmO5reUGSX7QZ+GKSyq+OKu18aX+weSydY91feKKVRb29Wbxz/fJuGylgm///SKCh14ll0t/qaLK+VLONAv5gq519YzyRTXXVPPCCAtshOLGvly2tLmvKMUEMS0i8G8f3Ydd++K47dOzsH5rO05ra0FTfQRV1QRJMxUU2FqEXESoY166NnsSjDKtIH4kFnKOYkbJRfM8Pv2LCIHc0oZ5P8krzB+4HQ1sS5Spa1D+hI2HRzCA2fmCZtYc7Eye/eTz2z6xdcfoRZk86x6T+DMT+MSc0nSLFppsnqHbiEXM3NWX1X158YLqO3weFY8/s/NLZj4jayQtdzxahuqwhS9fXwe/4uU7D8lzk3TSj1dUKZ5V66JzsPNAN09SNVTFSJpV99kNhGqSCYoYBNW9o+DwXZt9O8ux48UErv3wDORyNjZtTOPcZQHkxwrFKpMr4YroQflQBP0E80rEd0qhwLQxvRWshJgEFKU/b+CyilUPSYo8OJgZmzqSiUNUVuE5RRun5bHx0QufWT9w+54D+pmjEzICoSghDIomWDRXilinBRzMDGmajdYZytANVzbeWFERfj4WDSKRHJuzdUfq/Y6TxQt7iCi2ihtWT2DuzCqkUhpKTs4umnydoA3rXjt9/kwMjSex67U+hPw+VMZUBIIqBvtZE205QUzeW8BzPaoURm0wgu0vx7F9cw/Sk7XYsqsHG54iE5apI3jq5hIECnqa4o3YP9oPq5o54pIXPmr1JSl2XL+D4m56iyDt5ZHTn//ksqs+5aHo15rexc1SKwSJCyOTp4YBFFhtvemDq9YODCZbH3uy80e7DphLJfmwMnLcSibH4dUeC4W8iZkzxIFbPzb//R7J2lbQJCKwhZe3dF2TSOqqI6rQpBmoDw3h+guroGssdWG6tdIpCRTcaJa/2KipiKKSmDg6kcbIeAqpvji6uyzoRg75wmQRlNj8Gl4EUegJEgLxgO2n+Nm/TYDknbSMBWxWUU8JNWnVqDoQRl9DDrJF5ks0IZH/EmxXU1ycX0RxxUCN7cBx9ALOENr2fWnJdddH/eE02+0pT4/eWeGF5lw4RYU95gMyoqhkWttmjZ+fF/91x74990NScBhlurrLIBnb9bdwjrL9g1fPubGmOrJ/ND6J8jKGRCC2H5xYyzRGogCN5dkvX+VFM6GSnEamRFI4oZ0jcv9FVM7Kh6bFo8qayhjqasqRzhXwTM1eyDMGcKhdgR8V3OyxJizDzlPUmYSW1+APKiiP1dl6whTZQ0nIXNAULBc5kZmYtb8JQ0vb4QTFw4m2Ix5B5v5m9zaZcSHJX+2Z//KnFr7/5lBtZTzL8l7yUUCRM6AEWU8BA8rKCLIRavBIGUwk0k18A8NUPRV8QzMDJJZZwKqlkc03Xbvo8oJujRmEfioqKgiu+pFIpKq7enMLRMlPxCHpC07ginOqeLbTtg2k8uBpClVxH+vFg3On+Pw11iXNWhEZAiHVthwDflr0l7+0GMOjOXz3H0nCnQDXAFZ4B8vnVyNXOy/wVPV8/92hQPjQ+FDy4oHdqavGe1JnaSk3f+94RcxMtKH35V4cuoR8AWlB6TFwRU64wR8Rk+0l8BkK1sbOuPuDsy74jE/1py3YrzdZnCA42YzGGzOgdWadWz1Kpyt27ur5FKtrothUapHt1Emaw344q8+uueOCc5q/qihKKp3TYNos3eyQc82jbyjVmM46IRaYaJqG8+cBc5tiyOay6M7IzySdyNckw1oUlfRbIrJ5ul9h23Udvu/LpYjNFU0svrdY9ESr3LztILL5IH1O5oqi4ugMeahycfQncxbX/aayMtaRzKRRSJuYddqMXYvO8Hyna//AiqHeicsyfXj/RHduiWL6sGTLaRiObkB6GSu/qIReHO6wbZ7QM8jVCVgoNfR8vOXiL7fVzLg/VUhBeZPnO5zKIYuS2/oXCEaTN1674oPafft+tbM9M4cCP0TDYmpZa2DjkgWR7y47re3pdCbHHZIisXZt1gDlJuh6+zNnGQbbhiqQLc6R9EfhJfOQSjsmIi1fKVcjm9OZxKac5P3JyPjAfMu2lsdk7XQvzDpiQqXPKxPzRIWi6YRmmGMJQ9xtSoEXOsZDa5WQdFVZtTRePi/04GlnzbzLVMxhwZBgkGljTVIMuhqE1z2yhwJF77ZZS2u2VVxcdvuBV/uXjw7HT28x57SWp8XGbflDbe1y/LS8RdDUEhFRgtoMqXr/maHWR9bMXvWjoOQfStvaMXtR31YGJJPu0/zYOubOKtt61vLo44NDk/VXvrf1X2e1BH9VWRnt7ewa4lCRSY2qSggFFR6d8sYiyZb27B26yWZ5F7IqamgGHt04jmS2A49vjkurLqgunz27mnwDc5w6y17u1UTfXkMUfqU5MuwAfVceZnkdKT4ct2x9BAZzpqIPl1978TM9ixJfqa6O5ZKZJNtiwQkvH6ftj3ezsXmaMP1B3+Zwg7x50czZmDVZh7WLzhV2jh56z67x7qtnRWv7w2Lgt5WByEFHt2zW76kxiXoH+gTl8YnDcEomfaipEh/56I1Nd8yd1fhaOp3lzz+zihuOWWrXNFX6EZHLu5Wn0bGJZR2dyeUqUxmmHZ4wHtnpw7otWfIPTeaaqwP9kHRynkQ2hyEiu4i3i7kU9pgwkTFStNz3AscyLB5g2VFJlLPgaWH61H/i0smZYbKdjiYnLkm20xSrfXquv+Fp9giyPSNdnNGWZXDB+tN69976kKurq6bekDmx8nnxuZ6BIQrOrCMeK8D+9vsDFBmrfMs/Gz5VxpNP91+bSkuCqro1PabC/Fk5gozyiDQ+MmZ1jk1Ogm0YrCkXURVgDZbHmsqxievuajw1izWIIzmKuNmDmiz+FK53iuyHhzx9q6jbkW297nkOtuPWQPl8CQZKxdZw0ygEdraPfoB3BhcxtftC1zA0VFUoPYsWlWdN83AqWE9NnkoQ8Rc/3tTqMQlk1R/Wp8+23mjFVjxVVbBzZ9/aQz25Zk/xIU5uwOymclmFa8VpFU/5fV4nn3fPYVUrK1wHIzmEN0yK/RWNN2SAG29IqK+L8ioO724oNfbapvrCppHPO4Kv2I9jT4X2rGQYjQhGS1PkvtF4kj8wiQ2uNWS+RMd12P/LgjdgAKvbskKyxB6/6HgwOeE+qIIRzedTsGlTxye27Z44ne1/YnEknGIZj34VNB0XnF315KKFDe25/NEGn1XPotDj7W56+698HJMBrsP1IEgOlyEdxzl8GMuQUrAVeWnbyGdFYo4olKS72GLiMOdmg9D3b3KaFwX9aEcn8MjayVvws/6et21pfxnjdQxg6CAc9qGpsZLnTY6W0gAx5t4Htt32Wo/WHPAHp33jJqtZ9Fxd6SRmNFU+PcbSxMfaZEd2zOdthiCNnfIF/aUNeXrkxxBQKORHRUWMcH7hKDTk8Iar3Z19yx7+Y9fnfb4QSpmEKVRDws6yn0vmxx6f3RaJFwrHf2SX7ZQRBPPDzCTejnX9xQz5aCLHor5iYqxwRNKJ5WlyuZz/R3e9cld8wqa4y+bYvlTIYPjTtkmyVQNnn9X2U9NSeWLteINpiyEoxIi/cgZI4jHcgNsHdcRgW+y3vTp65Z4Deovq805I3OhPa+ugvw2KKs9cWb5h1qyq57PsieFv4mR5Mk7y4q8ZD/1/S9VSTMSJ45gAAAAASUVORK5CYII="/>
    </Svg>
  );
};

export default Icon;