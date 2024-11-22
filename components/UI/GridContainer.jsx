import s from "@/assets/styles/module/grid-container.module.scss";

export default function GridContainer ({children, columns="grid_columns_3", gap="gap_20"}) {
  return (
    <div className={s["grid_container"] + ' ' + s[`${columns}`] + ' ' + s[`${gap}`]}>
      {children}
    </div>
  )
}