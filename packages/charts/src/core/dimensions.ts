export type Dimensions = Partial<{
  height: number
  width: number
  marginTop: number
  marginRight: number
  marginBottom: number
  marginLeft: number
  rendererHeight: number
  rendererWidth: number
}>

export const combineDimensions = (dimensions: Dimensions & { height: number; width: number }): Required<Dimensions> => {
  const defaultDimensions = {
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
  }

  const mergedDimensions = {
    ...defaultDimensions,
    ...dimensions,
  }

  return {
    ...mergedDimensions,
    rendererHeight: mergedDimensions.height - mergedDimensions.marginTop - mergedDimensions.marginBottom,
    rendererWidth: mergedDimensions.width - mergedDimensions.marginLeft - mergedDimensions.marginRight,
  }
}
