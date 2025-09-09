function runBasicScan(filePath) {
  // For now, fake scanner
  return Promise.resolve({
    file: filePath,
    findings: ["[Demo] Scanner is working! Add rules next."]
  });
}

module.exports = { runBasicScan };
