import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useRecipes } from '../hooks/useRecipes';

export default function MainScreen() {
  const { recipes, loading, error } = useRecipes();

  const getDifficultyFromTime = (time: number) => {
    if (time < 30) return 'Easy';
    if (time < 60) return 'Medium';
    return 'Hard';
  };

  // Group recipes by category
  const categories = ['desayuno', 'almuerzo', 'cena', 'postre'];
  const categoriesTranslated = {
    'desayuno': 'Breakfast',
    'almuerzo': 'Lunch',
    'cena': 'Dinner',
    'postre': 'Desserts'
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <Link href="/explore" asChild>
          <TouchableOpacity style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#666" />
            <Text style={styles.searchText}>Search recipes...</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6B6B" />
          <Text style={styles.loadingText}>Loading recipes...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={48} color="#FF6B6B" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Featured Recipes</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recipesScroll}>
              {recipes.slice(0, 4).map((recipe) => (
                <Link key={recipe.id} href={`/recipe/${recipe.id}`} asChild>
                  <TouchableOpacity style={styles.recipeCard}>
                    <Image source={{ uri: recipe.imageurl }} style={styles.recipeImage} />
                    <View style={styles.recipeInfo}>
                      <Text style={styles.recipeTitle}>{recipe.nombre}</Text>
                      <View style={styles.recipeMetaInfo}>
                        <View style={styles.metaItem}>
                          <Ionicons name="time-outline" size={16} color="#666" />
                          <Text style={styles.metaText}>{recipe.tiempo} min</Text>
                        </View>
                        <View style={styles.metaItem}>
                          <Ionicons name="speedometer-outline" size={16} color="#666" />
                          <Text style={styles.metaText}>{getDifficultyFromTime(recipe.tiempo)}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Link>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.categoriesGrid}>
              {categories.map((category) => (
                <TouchableOpacity key={category} style={styles.categoryCard}>
                  <Text style={styles.categoryText}>{categoriesTranslated[category] || category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
    gap: 8,
  },
  searchText: {
    color: '#666',
    fontSize: 16,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  recipesScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  recipeInfo: {
    padding: 12,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  recipeMetaInfo: {
    flexDirection: 'row',
    gap: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: '#666',
    fontSize: 14,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  loadingContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});