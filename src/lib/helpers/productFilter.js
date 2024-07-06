export function filterProduct(data, categoryFilter, searchQuery) {
  const lowerCaseSearchQuery = searchQuery.toLowerCase();
  
  return data.filter(item => {
    const matchesCategory = categoryFilter === 'all' ? true : item.category === categoryFilter;
    const matchesSearch = item.name.toLowerCase().includes(lowerCaseSearchQuery);
    
    return matchesCategory && matchesSearch;
  });
}
