/**
 * 自定义文档插件
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @return {Promise<DocDetail>} 返回处理后的文档对象
 */
const format = async (doc) => {
  if(doc.properties&& doc.body_original){
    const {title} = doc.properties
    doc.body = `# ${title}\n${doc.body}`
  }
  return doc;
};

module.exports = {
  format,
};
