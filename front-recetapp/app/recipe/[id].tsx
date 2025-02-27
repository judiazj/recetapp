import { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function RecipeScreen() {
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState('ingredients');
  
  // Mock data - in a real app, you would fetch this based on the ID
  const recipes = {
    '1': {
      title: 'Homemade Pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      time: '45 min',
      servings: '4',
      difficulty: 'Medium',
      description: 'A delicious homemade pizza with a crispy crust and your favorite toppings.',
      ingredients: [
        '2 1/2 cups all-purpose flour',
        '1 teaspoon salt',
        '1 teaspoon sugar',
        '1 tablespoon active dry yeast',
        '1 cup warm water',
        '2 tablespoons olive oil',
        '1/2 cup pizza sauce',
        '2 cups shredded mozzarella cheese',
        'Toppings of your choice'
      ],
      instructions: [
        'In a large bowl, combine flour, salt, sugar, and yeast.',
        'Add warm water and olive oil, then mix until a dough forms.',
        'Knead the dough on a floured surface for about 5 minutes.',
        'Place in a greased bowl, cover, and let rise for 30 minutes.',
        'Preheat oven to 450°F (230°C).',
        'Roll out the dough on a floured surface to your desired thickness.',
        'Transfer to a pizza pan or baking sheet.',
        'Spread pizza sauce over the dough, leaving a small border.',
        'Sprinkle with cheese and add your favorite toppings.',
        'Bake for 12-15 minutes or until crust is golden and cheese is bubbly.',
        'Let cool for a few minutes before slicing and serving.'
      ],
      tags: ['Italian', 'Dinner', 'Family Friendly']
    },
    '2': {
      title: 'Chicken Curry',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      time: '30 min',
      servings: '4',
      difficulty: 'Easy',
      description: 'A flavorful and aromatic chicken curry thats perfect for a weeknight dinner.',
      ingredients: [
        '1 lb boneless chicken, cut into pieces',
        '2 tablespoons vegetable oil',
        '1 onion, finely chopped',
        '2 cloves garlic, minced',
        '1 tablespoon ginger, grated',
        '2 tablespoons curry powder',
        '1 teaspoon turmeric',
        '1 can (14 oz) coconut milk',
        'Salt and pepper to taste',
        'Fresh cilantro for garnish'
      ],
      instructions: [
        'Heat oil in a large pan over medium heat.',
        'Add onions and cook until soft and translucent, about 5 minutes.',
        'Add garlic and ginger, cook for another minute.',
        'Add curry powder and turmeric, stir for 30 seconds until fragrant.',
        'Add chicken pieces and cook until they start to brown, about 5 minutes.',
        'Pour in coconut milk, bring to a simmer.',
        'Reduce heat and cook for 15-20 minutes until chicken is cooked through.',
        'Season with salt and pepper to taste.',
        'Garnish with fresh cilantro before serving.',
        'Serve with rice or naan bread.'
      ],
      tags: ['Indian', 'Spicy', 'Dinner']
    },
    '3': {
      title: 'Avocado Toast',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      time: '10 min',
      servings: '2',
      difficulty: 'Easy',
      description: 'A simple and nutritious breakfast thats ready in minutes.',
      ingredients: [
        '2 slices of whole grain bread',
        '1 ripe avocado',
        '1 tablespoon lemon juice',
        'Salt and pepper to taste',
        'Red pepper flakes (optional)',
        '2 eggs (optional)'
      ],
      instructions: [
        'Toast the bread slices until golden and crisp.',
        'Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.',
        'Add lemon juice, salt, and pepper to the avocado and mash with a fork.',
        'Spread the mashed avocado evenly over the toast.',
        'If desired, top with a fried or poached egg.',
        'Sprinkle with red pepper flakes if you like a bit of heat.',
        'Serve immediately and enjoy!'
      ],
      tags: ['Breakfast', 'Vegetarian', 'Quick']
    },
    '4': {
      title: 'Chocolate Cake',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      time: '60 min',
      servings: '8',
      difficulty: 'Medium',
      description: 'A rich and moist chocolate cake thats perfect for any celebration.',
      ingredients: [
        '2 cups all-purpose flour',
        '2 cups sugar',
        '3/4 cup unsweetened cocoa powder',
        '2 teaspoons baking soda',
        '1 teaspoon salt',
        '2 eggs',
        '1 cup buttermilk',
        '1/2 cup vegetable oil',
        '2 teaspoons vanilla extract',
        '1 cup hot coffee'
      ],
      instructions: [
        'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
        'In a large bowl, combine flour, sugar, cocoa, baking soda, and salt.',
        'Add eggs, buttermilk, oil, and vanilla; beat on medium speed for 2 minutes.',
        'Stir in hot coffee (batter will be thin). Pour into prepared pans.',
        'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
        'Cool for 10 minutes; remove from pans to wire racks to cool completely.',
        'Frost with your favorite chocolate frosting.',
        'Store in the refrigerator until ready to serve.'
      ],
      tags: ['Dessert', 'Baking', 'Celebration']
    }
  };
  
  const recipe = recipes[id as keyof typeof recipes];
  
  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: recipe.image }} style={styles.image} />
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{recipe.title}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Ionicons name="time-outline" size={20} color="#FF6B6B" />
              <Text style={styles.metaText}>{recipe.time}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="people-outline" size={20} color="#FF6B6B" />
              <Text style={styles.metaText}>{recipe.servings} servings</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="speedometer-outline" size={20} color="#FF6B6B" />
              <Text style={styles.metaText}>{recipe.difficulty}</Text>
            </View>
          </View>
          
          <View style={styles.tagsContainer}>
            {recipe.tags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
          
          <Text style={styles.description}>{recipe.description}</Text>
          
          <View style={styles.tabsContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'ingredients' && styles.activeTab]}
              onPress={() => setActiveTab('ingredients')}
            >
              <Text style={[styles.tabText, activeTab === 'ingredients' && styles.activeTabText]}>
                Ingredients
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'instructions' && styles.activeTab]}
              onPress={() => setActiveTab('instructions')}
            >
              <Text style={[styles.tabText, activeTab === 'instructions' && styles.activeTabText]}>
                Instructions
              </Text>
            </TouchableOpacity>
          </View>
          
          {activeTab === 'ingredients' ? (
            <View style={styles.ingredientsContainer}>
              {recipe.ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.ingredientText}>{ingredient}</Text>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.instructionsContainer}>
              {recipe.instructions.map((instruction, index) => (
                <View key={index} style={styles.instructionItem}>
                  <View style={styles.instructionNumber}>
                    <Text style={styles.instructionNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.instructionText}>{instruction}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    marginTop: -30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 24,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B6B',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#999',
  },
  activeTabText: {
    color: '#FF6B6B',
  },
  ingredientsContainer: {
    gap: 12,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B6B',
  },
  ingredientText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  instructionsContainer: {
    gap: 20,
  },
  instructionItem: {
    flexDirection: 'row',
    gap: 16,
  },
  instructionNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF6B6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionNumberText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    lineHeight: 24,
  },
});