import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function ExploreScreen() {
  const popularRecipes = [
    {
      id: 1,
      title: 'Homemade Pizza',
      time: '45 min',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      tags: ['Italian', 'Dinner'],
    },
    {
      id: 2,
      title: 'Chicken Curry',
      time: '30 min',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      tags: ['Indian', 'Spicy'],
    },
    {
      id: 3,
      title: 'Avocado Toast',
      time: '10 min',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      tags: ['Breakfast', 'Vegetarian'],
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      time: '60 min',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      tags: ['Dessert', 'Baking'],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Recipes</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput 
            placeholder="Search recipes..." 
            style={styles.searchInput}
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <View style={styles.tagsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Low-Carb', 'Keto', 'Quick'].map((tag) => (
            <TouchableOpacity 
              key={tag} 
              style={[styles.tagButton, tag === 'All' && styles.activeTagButton]}
            >
              <Text style={[styles.tagText, tag === 'All' && styles.activeTagText]}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.recipesGrid}>
        {popularRecipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipe/${recipe.id}`} asChild>
            <TouchableOpacity style={styles.recipeCard}>
              <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <View style={styles.recipeMetaInfo}>
                  <View style={styles.metaItem}>
                    <Ionicons name="time-outline" size={14} color="#666" />
                    <Text style={styles.metaText}>{recipe.time}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="speedometer-outline" size={14} color="#666" />
                    <Text style={styles.metaText}>{recipe.difficulty}</Text>
                  </View>
                </View>
                <View style={styles.tagsList}>
                  {recipe.tags.map((tag) => (
                    <View key={tag} style={styles.tagPill}>
                      <Text style={styles.tagPillText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 16,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  tagsContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  tagButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeTagButton: {
    backgroundColor: '#FF6B6B',
  },
  tagText: {
    color: '#666',
    fontWeight: '500',
  },
  activeTagText: {
    color: '#fff',
  },
  recipesGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  recipeInfo: {
    padding: 12,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  recipeMetaInfo: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: '#666',
    fontSize: 12,
  },
  tagsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  tagPill: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  tagPillText: {
    fontSize: 10,
    color: '#666',
  },
});