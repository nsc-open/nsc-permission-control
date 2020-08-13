

const CLIENT_SIDE_PERMISSIONS = {}

export const defPermission = (permissionCode, logic) => {
  if (CLIENT_SIDE_PERMISSIONS[permissionCode]) {
    console.warn(`Permission ${permissionCode} exists, will be overrided`)
  }
  CLIENT_SIDE_PERMISSIONS[permissionCode] = logic
}

export const hasPermission = (permissionsRequired, permissionsGranted) => {
  permissionsRequired = typeof permissionsRequired === 'string' ? [permissionsRequired] : permissionsRequired
  permissionsGranted = typeof permissionsGranted === 'string' ? [permissionsGranted] : permissionsGranted
  
  if (permissionsGranted.includes('*') || permissionsRequired.length === 0) {
    return true
  } else {
    return permissionsRequired.filter(p => {
      if (permissionsGranted.includes(p)) {
        return true
      } else if (CLIENT_SIDE_PERMISSIONS[p]) {
        return CLIENT_SIDE_PERMISSIONS[p] && CLIENT_SIDE_PERMISSIONS[p]()
      } else {
        return false
      }
    }).length === permissionsRequired.length
  }
}